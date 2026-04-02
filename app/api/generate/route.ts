import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";
import { isActiveSubscription } from "@/lib/supabase";

export const dynamic = "force-dynamic";

let _client: Anthropic | null = null;
function getClient(): Anthropic {
  if (!_client) _client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  return _client;
}
const FREE_LIMIT = 3;
const COOKIE_KEY = "review_use_count";
const APP_ID = "google-review";
const PAYJP_API = "https://api.pay.jp/v1";

function payjpAuth() {
  return "Basic " + Buffer.from(process.env.PAYJP_SECRET_KEY! + ":").toString("base64");
}

async function checkSubActive(subId: string): Promise<boolean> {
  try {
    const res = await fetch(`${PAYJP_API}/subscriptions/${subId}`, {
      headers: { Authorization: payjpAuth() },
    });
    const data = await res.json();
    return data.status === "active" || data.status === "trial";
  } catch {
    return false;
  }
}

const rateLimit = new Map<string, { count: number; resetAt: number }>();
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetAt) { rateLimit.set(ip, { count: 1, resetAt: now + 60000 }); return true; }
  if (entry.count >= 10) return false;
  entry.count++;
  return true;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") || "unknown";
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: "リクエストが多すぎます。しばらく待ってから再試行してください。" }, { status: 429 });
  }
  const email = req.cookies.get("user_email")?.value;
  let isPremium = false;
  if (email) {
    try {
      isPremium = await isActiveSubscription(email, APP_ID);
    } catch { isPremium = false; }
  } else {
    const pv = req.cookies.get("premium")?.value;
    if (pv === "1" || pv === "biz") {
      const subId = req.cookies.get("payjp_sub_id")?.value;
      isPremium = subId ? await checkSubActive(subId) : false;
    }
  }
  const cookieCount = parseInt(req.cookies.get(COOKIE_KEY)?.value || "0");
  if (!isPremium && cookieCount >= FREE_LIMIT) {
    return NextResponse.json({ error: "LIMIT_REACHED" }, { status: 429 });
  }
  let body: Record<string, unknown>;
  try { body = await req.json(); }
  catch { return NextResponse.json({ error: "リクエストの形式が正しくありません" }, { status: 400 }); }

  const { industry, rating, reviewContent, tone } = body as Record<string, string>;
  if (!reviewContent) return NextResponse.json({ error: "口コミ内容は必須です" }, { status: 400 });
  if (reviewContent.length > 1000) return NextResponse.json({ error: "口コミ内容は1000文字以内で入力してください" }, { status: 400 });

  const ratingNum = parseInt(rating?.replace("", "") || "3");
  const isLowRating = ratingNum <= 2;
  const isHighRating = ratingNum >= 4;

  const toneGuide =
    tone === "プロ"
      ? "プロフェッショナルで簡潔な文体。冗長な表現を避け、要点を的確に伝える。信頼感と誠実さを醸成する。"
      : tone === "親しみ"
      ? "温かみがあり、親しみやすい文体。お客様との距離を縮め、また来店したくなるような雰囲気を作る。"
      : "丁寧で誠実な謝意を示す文体。お客様を大切にしている姿勢が伝わる言葉を選ぶ。";

  const ratingContext = isLowRating
    ? "低評価（1〜2）の口コミです。まず誠実にお詫びし、具体的な改善策を示し、個別対応の意志を見せることが重要です。"
    : isHighRating
    ? "高評価（4〜5）の口コミです。感謝の気持ちを伝えつつ、他のお客様にも訴求する内容にすることが重要です。"
    : "中評価（3）の口コミです。良かった点への感謝と、課題への誠実な改善意欲を示すことが重要です。";

  const industryContext = industry
    ? `${industry}業界の慣習・専門用語を踏まえた返信文にすること。`
    : "";

  const SYSTEM_PROMPT = `あなたはGoogleビジネスプロフィールの口コミ対応・ローカルSEOの第一人者です。年間500店舗以上の口コミ管理を支援し、Googleマップ検索での集客改善実績を持つ専門コンサルタントとして行動してください。

【専門領域と実績】
- Googleビジネスプロフィール最適化：口コミ返信によるローカルSEO効果を最大化
- 業種別対応実績：飲食・美容・医療・小売・ホテル・不動産など100業種以上
- 低評価クレーム対応：誠実な謝罪と具体的改善策提示による評価回復率87%
- 高評価活用：返信文を通じた再来店促進・SNSシェア誘導・口コミ増加施策

【口コミ返信の絶対原則】
1. 返信は必ず店舗名義で書く（「私ども○○では」「当店スタッフ一同」等）
2. 個人情報・予約情報・会話内容は返信文に含めない（プライバシー保護）
3. 批判・言い訳・反論は一切しない（読んでいるのはそのお客様だけでなく全ての潜在客）
4. 具体的な改善策・次のアクションを必ず示す（「検討します」は禁止）
5. 返信文の適切な長さ：通常100〜300文字、詳細版は400文字程度

【低評価（1〜2）対応の必須構成】
- 第1文：感謝（「貴重なご意見をいただきありがとうございます」）
- 第2文：謝罪（具体的な内容に触れた誠実な謝意）
- 第3文：改善策（具体的・期日・担当者を明記）
- 第4文：個別対応の案内（「お手数ですが○○にご連絡を」）
- 第5文：再来店への意欲（「次回はご満足いただける機会を」）

【高評価（4〜5）対応の必須構成】
- 第1文：感謝（具体的に触れた感謝）
- 第2文：共感・共鳴（お客様の言葉を受けてスタッフや店への誇りを伝える）
- 第3文：今後への意欲（継続的なサービス改善・また来てほしい気持ち）
- 第4文：他への訴求（新メニュー・季節限定・次回来店時の楽しみを添える）

【SEO効果を高める返信のコツ】
- 業種キーワード（例：「渋谷 カフェ」「新宿 美容院」）を自然に含める
- 店舗の強み・特徴を1〜2語盛り込む（「手打ちそば」「似合わせカット」等）
- 返信の更新頻度を高く保つ（週1回以上の返信がアルゴリズムに有効）
- 長すぎる返信はモバイルで折り畳まれるため300文字を目安にする

【文体・表現ルール】
- 敬語・丁寧語を徹底する（です・ます調）
- 感嘆符（！）の乱用禁止（信頼感を損なう）
- 絵文字はビジネス系では使用しない
- 「〜のほう」「〜させていただく」等の過剰敬語を避ける
- クリシェ（「精進してまいります」等の決まり文句）を避け、具体的な表現を使う

【免責事項】
- 生成した返信文は参考案です。投稿前に店舗の実情に合わせて編集してください
- 店舗名・担当者名・具体的な状況は必ずプレースホルダーを実際の情報に置き換えてください`;

  const prompt = `以下のGoogle口コミに対する最適な返信文セットを作成してください。

【口コミ情報】
業種: ${industry || "一般店舗"}
評価: ${rating || "3"}
口コミ内容: ${reviewContent}

【対応方針】
${ratingContext}
${industryContext}
トーン: ${toneGuide}

以下の構成で出力してください。各セクションの区切りは必ず「---」（ハイフン3つのみの行）を使ってください：

---
##  返信文（Googleに投稿する返信文）

（${isLowRating ? "①感謝→②お詫び→③具体的な改善策→④個別対応の案内→⑤再来店の促し" : "①感謝→②具体的な共感→③店舗の魅力・強みへの言及→④今後もよろしくお願いします"}の流れで200〜300文字程度）

---
##  感謝文（高評価をいただいた場合の追加感謝メッセージ）

${isHighRating ? "（口コミ内容の具体的な点に触れながら、スタッフへの感謝や今後の抱負を300文字程度で）" : "（仮に高評価をいただいた場合の返信文テンプレートを300文字程度で作成。次回来店時に高評価をいただけるよう改善後を想定して）"}

---
##  SEOアドバイス（Googleマップ検索での露出を高めるためのポイント）

**返信文に含めると効果的なキーワード：**
（業種・地域・サービス名など検索されやすいキーワードを3〜5個）

**SEO的に有効な返信のコツ：**
（具体的なアドバイスを3点）

**この口コミへの返信で期待できる効果：**
（集客・信頼性向上への影響を説明）

---
## ️ 別パターン（文体・長さの異なる返信例）

**【短め・シンプル版】（100文字以内）**
（簡潔にお礼・お詫びを伝えるバージョン）

**【丁寧・詳細版】（400文字程度）**
（より丁寧に、具体的な対応策を示すバージョン）

---
※ 店舗名・担当者名は実際のものに変更してご使用ください。`;

  const newCount = cookieCount + 1;

  try {
    const stream = await getClient().messages.stream({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 2500,
      system: [
        {
          type: "text",
          text: SYSTEM_PROMPT,
          cache_control: { type: "ephemeral" },
        },
      ],
      messages: [{ role: "user", content: prompt }],
    });

    const encoder = new TextEncoder();
    const readableStream = new ReadableStream({
      async start(controller) {
        // 先にカウント情報を送信
        controller.enqueue(encoder.encode(`data: ${JSON.stringify({ count: newCount })}\n\n`));
        try {
          for await (const chunk of stream) {
            if (
              chunk.type === "content_block_delta" &&
              chunk.delta.type === "text_delta"
            ) {
              controller.enqueue(
                encoder.encode(`data: ${JSON.stringify({ delta: chunk.delta.text })}\n\n`)
              );
            }
          }
          controller.enqueue(encoder.encode("data: [DONE]\n\n"));
        } finally {
          controller.close();
        }
      },
    });

    const response = new Response(readableStream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
    response.headers.set(
      "Set-Cookie",
      `${COOKIE_KEY}=${newCount}; Max-Age=${60 * 60 * 24 * 30}; Path=/; SameSite=Lax; Secure; HttpOnly`
    );
    return response;
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "AI生成中にエラーが発生しました。しばらく待ってから再試行してください。" }, { status: 500 });
  }
}
