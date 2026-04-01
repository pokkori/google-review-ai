import type { Metadata } from "next";
import Link from "next/link";

interface KeywordData {
  title: string;
  h1: string;
  description: string;
  features: { icon: string; title: string; text: string }[];
  faqs: { q: string; a: string }[];
  lastUpdated: string;
}

export const KEYWORDS: Record<string, KeywordData> = {
  "google-review-henshin-rei": {
    title: "Google口コミ 返信 例文 テンプレート | Google口コミ返信AI",
    h1: "Google口コミ 返信 例文 テンプレート",
    description: "Google口コミへの返信例文とテンプレートをAIが生成。好評・悪評問わず状況に合った丁寧な返信をAIが即時作成します。",
    features: [
      { icon: "返信", title: "返信文AI生成", text: "口コミ内容を入力するだけで状況に合った丁寧な返信文をAIが即時生成" },
      { icon: "業種", title: "業種別テンプレート", text: "飲食店・美容院・病院など業種に合わせた返信テンプレートをAIが提供" },
      { icon: "評価", title: "高評価・低評価対応", text: "5星・1星どちらの口コミにも適切なトーンで返信をAIが作成" },
    ],
    faqs: [
      { q: "Google口コミへの返信は必要？", a: "返信することで他の潜在顧客への印象が向上します。特に悪評への適切な返信は信頼性向上に効果的です。" },
      { q: "返信のベストタイミングは？", a: "口コミ投稿後24〜48時間以内の返信が理想的です。AIが迅速な返信文作成をサポートします。" },
      { q: "返信文の長さはどれくらいが適切？", a: "2〜4文程度が読みやすく伝わりやすいです。AIが適切な長さで返信文を作成します。" },
    ],
    lastUpdated: "2026-03-31",
  },
  "negative-review-taio-houhou": {
    title: "悪い口コミ 対応 方法 返信例 | Google口コミ返信AI",
    h1: "悪い口コミ 対応 方法 返信例",
    description: "悪い口コミへの対応方法と返信例をAIが提案。低評価・クレーム口コミに誠実に対応する返信文をAIが作成します。",
    features: [
      { icon: "防御", title: "悪評返信特化AI", text: "クレーム・低評価口コミに誠実かつ建設的に対応する返信文をAIが生成" },
      { icon: "分析", title: "問題点分析", text: "口コミの内容から改善すべき点をAIが分析して返信に盛り込む" },
      { icon: "修復", title: "関係修復サポート", text: "不満を持った顧客との関係修復につながる返信アプローチをAIが提案" },
    ],
    faqs: [
      { q: "悪い口コミへの返信で絶対にやってはいけないことは？", a: "感情的な反論・個人攻撃・口コミの否定は逆効果です。AIが冷静で建設的な返信文を作成します。" },
      { q: "事実と異なる悪評にはどう対応する？", a: "事実関係を丁寧に説明しつつ、対話の姿勢を示すことが重要です。AIが適切な反論の表現を提案します。" },
      { q: "悪評返信で挽回できる？", a: "誠実な対応で印象が逆転するケースもあります。AIが信頼回復につながる返信戦略を提案します。" },
    ],
    lastUpdated: "2026-03-31",
  },
  "google-map-review-kanri": {
    title: "Googleマップ 口コミ 管理 方法 | Google口コミ返信AI",
    h1: "Googleマップ 口コミ 管理 方法",
    description: "Googleマップの口コミ管理方法を解説。口コミへの返信・モニタリング・評価向上の戦略をAIがサポートします。",
    features: [
      { icon: "管理", title: "口コミモニタリング", text: "新着口コミを管理して返信漏れを防ぐ管理体制づくりをAIがサポート" },
      { icon: "向上", title: "評価向上戦略", text: "Googleマップの評価を継続的に向上させるための戦略をAIが提案" },
      { icon: "整理", title: "返信テンプレート管理", text: "業種・状況別の返信テンプレートをAIが作成して管理効率を向上" },
    ],
    faqs: [
      { q: "Googleマップの口コミ管理で最重要なことは？", a: "全ての口コミに返信することと、悪評への迅速な対応です。AIが返信作成を自動化して管理負担を軽減します。" },
      { q: "複数店舗の口コミを管理するには？", a: "Googleビジネスプロフィールの一括管理機能と合わせてAIの返信生成を活用することで効率的に管理できます。" },
      { q: "口コミ返信はSEOに影響する？", a: "Googleマップの検索順位に影響します。返信率が高い店舗は上位表示されやすい傾向があります。" },
    ],
    lastUpdated: "2026-03-31",
  },
  "restaurant-review-henshin": {
    title: "飲食店 口コミ 返信 例文 | Google口コミ返信AI",
    h1: "飲食店 口コミ 返信 例文",
    description: "飲食店向けのGoogle口コミ返信例文をAIが生成。料理・接客・衛生に関する口コミへの適切な返信をAIが作成します。",
    features: [
      { icon: "食事", title: "飲食店特化テンプレート", text: "料理の感想・接客評価・衛生面など飲食店特有の口コミへの返信をAIが生成" },
      { icon: "料理", title: "シェフ・オーナー目線の返信", text: "食へのこだわりや改善の姿勢が伝わる返信文をAIが作成" },
      { icon: "再来", title: "リピート促進文句", text: "次回来店につながる一言をAIが自然に組み込んだ返信文を生成" },
    ],
    faqs: [
      { q: "飲食店の悪評（料理がまずいなど）への返信は？", a: "食材・調理法への誠実な説明と改善の意思を示すことが重要です。AIが料理への真剣な姿勢が伝わる返信を作成します。" },
      { q: "食中毒に関するクレーム口コミには？", a: "慎重な対応が必要な重大なクレームです。AIが法的リスクを考慮した適切な対応文を提案します。" },
      { q: "高評価口コミへの返信も必要？", a: "高評価への返信はリピート率向上に効果的です。AIが感謝の気持ちと次回来店を促す返信文を作成します。" },
    ],
    lastUpdated: "2026-03-31",
  },
  "medical-review-taio": {
    title: "病院 クリニック 口コミ 返信 方法 | Google口コミ返信AI",
    h1: "病院 クリニック 口コミ 返信 方法",
    description: "病院・クリニック向けのGoogle口コミ返信方法をAIが提案。医療機関特有のプライバシー配慮と適切な対応をAIがサポートします。",
    features: [
      { icon: "医療", title: "医療機関特化対応", text: "個人情報・診療情報の保護を最優先にした医療機関向け返信文をAIが生成" },
      { icon: "倫理", title: "医療倫理に配慮した表現", text: "医師法・個人情報保護法に配慮した適切な表現でAIが返信文を作成" },
      { icon: "信頼", title: "患者信頼向上", text: "医療機関への信頼感を高める誠実な返信アプローチをAIが提案" },
    ],
    faqs: [
      { q: "クリニックの口コミ返信で注意すべきことは？", a: "患者の個人情報や診療内容に触れないことが最重要です。AIが個人情報保護に配慮した返信文を作成します。" },
      { q: "待ち時間が長いという口コミへの返信は？", a: "改善の姿勢と現状の説明を丁寧に伝えることが重要です。AIが誠実かつ建設的な返信文を作成します。" },
      { q: "医師への批判的な口コミには？", a: "防御的にならず、患者の経験を尊重しながら改善の意思を示す対応をAIが提案します。" },
    ],
    lastUpdated: "2026-03-31",
  },
  "beauty-salon-review-reply": {
    title: "美容院 サロン 口コミ 返信 例 | Google口コミ返信AI",
    h1: "美容院 サロン 口コミ 返信 例",
    description: "美容院・サロン向けのGoogle口コミ返信例をAIが生成。仕上がり・接客・価格に関する口コミへの適切な返信をAIが作成します。",
    features: [
      { icon: "美容", title: "美容院特化テンプレート", text: "ヘアカット・カラー・パーマなど施術別の口コミ返信をAIが生成" },
      { icon: "品質", title: "サロンブランドを守る返信", text: "サロンのブランドイメージを損なわない品のある返信文をAIが作成" },
      { icon: "再来", title: "指名・再来店促進", text: "担当スタイリストへの指名や再来店につながる返信文をAIが生成" },
    ],
    faqs: [
      { q: "仕上がりへの不満口コミへの返信は？", a: "施術へのこだわりと誠実な謝罪・改善の意思を伝えることが重要です。AIが美容師の誠実さが伝わる返信を作成します。" },
      { q: "価格が高いという口コミへの返信は？", a: "サービスの価値・品質へのこだわりを丁寧に説明する返信をAIが作成します。" },
      { q: "スタッフの態度への苦情口コミには？", a: "誠実な謝罪と再発防止の意思を示すことが重要です。AIが信頼回復につながる返信文を提案します。" },
    ],
    lastUpdated: "2026-03-31",
  },
  "google-review-sakujo-houhou": {
    title: "Google口コミ 削除 依頼 方法 | Google口コミ返信AI",
    h1: "Google口コミ 削除 依頼 方法",
    description: "Google口コミの削除依頼方法を解説。事実と異なる口コミ・嫌がらせ口コミの削除申請手順をAIがサポートします。",
    features: [
      { icon: "削除", title: "削除申請サポート", text: "Googleのポリシー違反に該当する口コミの削除申請手順をAIが案内" },
      { icon: "申請", title: "申請文書作成", text: "削除申請に必要な説明文書をAIが作成。違反理由を明確に伝える文章を生成" },
      { icon: "代替", title: "削除不可時の対応", text: "削除が認められない場合の適切な返信対応をAIが提案" },
    ],
    faqs: [
      { q: "Google口コミを削除できる条件は？", a: "スパム・虚偽の内容・個人攻撃・ポリシー違反などがGoogleの削除対象です。AIが削除可能か判断して申請をサポートします。" },
      { q: "削除申請はどこからする？", a: "Googleビジネスプロフィールから口コミをフラグ（報告）することで申請できます。AIが申請手順を案内します。" },
      { q: "削除されるまでどれくらいかかる？", a: "Googleの審査に数日〜数週間かかることがあります。その間の返信対応もAIがサポートします。" },
    ],
    lastUpdated: "2026-03-31",
  },
  "low-rating-recover-strategy": {
    title: "低評価 挽回 口コミ 返信 戦略 | Google口コミ返信AI",
    h1: "低評価 挽回 口コミ 返信 戦略",
    description: "低評価口コミを挽回するための返信戦略をAIが提案。誠実な対応で評価を回復させる長期的な口コミ戦略をサポートします。",
    features: [
      { icon: "回復", title: "評価回復プラン", text: "低評価からの回復に向けた体系的な口コミ管理プランをAIが設計" },
      { icon: "誘導", title: "高評価誘導策", text: "満足顧客から自然に高評価口コミを集める方法をAIが提案" },
      { icon: "改善", title: "ネガティブループ脱出", text: "低評価が続く場合のパターン分析と根本原因の改善をAIがサポート" },
    ],
    faqs: [
      { q: "平均評価3以下から回復できる？", a: "適切な対応と高評価口コミの増加で時間はかかりますが回復可能です。AIが現実的な回復プランを提案します。" },
      { q: "高評価口コミを増やすには？", a: "満足した顧客に自然な形で口コミをお願いすることが最も効果的です。AIが口コミ依頼のタイミングと方法を提案します。" },
      { q: "競合からの嫌がらせ口コミへの対応は？", a: "削除申請と同時に適切な返信で他の顧客への印象管理をすることが重要です。AIが対策を提案します。" },
    ],
    lastUpdated: "2026-03-31",
  },
  "review-management-best-practice": {
    title: "口コミ 管理 ベストプラクティス 店舗 | Google口コミ返信AI",
    h1: "口コミ 管理 ベストプラクティス 店舗",
    description: "店舗の口コミ管理のベストプラクティスを解説。返信ルール・モニタリング体制・評価向上の仕組みをAIがサポートします。",
    features: [
      { icon: "手順", title: "口コミ管理マニュアル", text: "スタッフが迷わない口コミ対応マニュアルをAIが業種別に作成" },
      { icon: "監視", title: "モニタリング体制構築", text: "新着口コミを見逃さないためのアラート設定と担当者体制の整備をAIが支援" },
      { icon: "KPI", title: "KPI設定と改善サイクル", text: "口コミ評価に関するKPIと定期改善サイクルの仕組みをAIが設計" },
    ],
    faqs: [
      { q: "口コミ管理を誰が担当すべき？", a: "オーナー・店長・専任担当者など責任者を明確にすることが重要です。AIが担当者向けの対応マニュアルを作成します。" },
      { q: "返信に使える時間が限られている場合は？", a: "AIを活用した返信文生成で返信時間を大幅に削減できます。1口コミあたり数分で対応可能になります。" },
      { q: "チェーン店・フランチャイズの口コミ管理は？", a: "店舗ごとの個別対応と本部の統一ガイドラインのバランスが重要です。AIが各店舗対応の効率化をサポートします。" },
    ],
    lastUpdated: "2026-03-31",
  },
  "google-business-hyoka-ageru": {
    title: "Googleビジネス 評価 上げる 方法 | Google口コミ返信AI",
    h1: "Googleビジネス 評価 上げる 方法",
    description: "Googleビジネスの評価を上げる方法をAIが解説。口コミ返信・情報充実・評価収集の総合戦略をAIがサポートします。",
    features: [
      { icon: "★", title: "評価向上戦略", text: "Googleビジネスの評価を継続的に向上させるための総合戦略をAIが設計" },
      { icon: "最適", title: "プロフィール最適化", text: "Googleビジネスプロフィールの情報充実でローカルSEO効果を高める方法をAIが提案" },
      { icon: "収集", title: "口コミ収集自動化", text: "自然な形で高評価口コミを継続的に集める仕組みをAIが設計" },
    ],
    faqs: [
      { q: "Googleビジネスの評価を短期間で上げるには？", a: "全口コミへの迅速な返信・既存満足顧客への口コミ依頼・プロフィール情報の充実が短期的に効果的です。" },
      { q: "Googleビジネスの評価はSEOに影響する？", a: "Googleマップの検索順位に直接影響します。高評価・返信率が高いほど上位表示されやすいです。" },
      { q: "口コミ評価を購入することはできる？", a: "ステルスマーケティング規制・Googleポリシー違反になります。AIが合法的な口コミ収集方法を提案します。" },
    ],
    lastUpdated: "2026-03-31",
  },
};

const ALL_SLUGS = Object.keys(KEYWORDS);
export function generateStaticParams() { return ALL_SLUGS.map((slug) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = KEYWORDS[slug];
  if (!data) return { title: "Not Found" };
  return {
    title: data.title, description: data.description,
    openGraph: { title: data.title, description: data.description, type: "article", modifiedTime: data.lastUpdated, url: `https://google-review-ai.vercel.app/keywords/${slug}` },
    twitter: { card: "summary_large_image", title: data.title, description: data.description },
    alternates: { canonical: `https://google-review-ai.vercel.app/keywords/${slug}` },
    other: { "article:modified_time": data.lastUpdated },
  };
}

export default async function KeywordPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = KEYWORDS[slug];
  if (!data) return (<div style={{minHeight:"100vh",background:"#0f172a",color:"#e2e8f0",display:"flex",alignItems:"center",justifyContent:"center"}}><div style={{textAlign:"center"}}><h1>ページが見つかりません</h1><Link href="/" style={{color:"#4ade80"}}>トップへ戻る</Link></div></div>);
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", "dateModified": data.lastUpdated, "mainEntity": data.faqs.map((faq) => ({ "@type": "Question", "name": faq.q, "acceptedAnswer": { "@type": "Answer", "text": faq.a } })) };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0f172a 0%, #14532d 50%, #0f172a 100%)", color: "#e2e8f0", padding: "2rem 1rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem", color: "#FFD700", fontWeight: "bold" }}>★</div>
            <h1 style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", fontWeight: "bold", marginBottom: "1rem", background: "linear-gradient(90deg, #4ade80, #22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{data.h1}</h1>
            <p style={{ fontSize: "1.1rem", color: "#94a3b8", marginBottom: "2rem" }}>{data.description}</p>
            <Link href="/" style={{ display: "inline-block", background: "linear-gradient(135deg, #4ade80, #22d3ee)", color: "#fff", padding: "1rem 2.5rem", borderRadius: "50px", fontWeight: "bold", fontSize: "1.1rem", textDecoration: "none" }}>今すぐ無料で返信文を作成 →</Link>
          </div>
          <div style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1.5rem", textAlign: "center", color: "#4ade80" }}>AIがサポートする3つのポイント</h2>
            <div style={{ display: "grid", gap: "1rem" }}>
              {data.features.map((f, i) => (<div key={i} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(74,222,128,0.2)", borderRadius: "12px", padding: "1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}><span style={{ fontSize: "2rem" }}>{f.icon}</span><div><h3 style={{ fontWeight: "bold", marginBottom: "0.5rem", color: "#4ade80" }}>{f.title}</h3><p style={{ color: "#94a3b8", fontSize: "0.95rem" }}>{f.text}</p></div></div>))}
            </div>
          </div>
          <div style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1.5rem", textAlign: "center", color: "#4ade80" }}>よくある質問</h2>
            <div style={{ display: "grid", gap: "1rem" }}>
              {data.faqs.map((faq, i) => (<div key={i} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(74,222,128,0.2)", borderRadius: "12px", padding: "1.5rem" }}><h3 style={{ fontWeight: "bold", marginBottom: "0.75rem", color: "#4ade80", fontSize: "1rem" }}>Q: {faq.q}</h3><p style={{ color: "#94a3b8", fontSize: "0.95rem" }}>A: {faq.a}</p></div>))}
            </div>
          </div>
          <div style={{ textAlign: "center", marginBottom: "3rem", padding: "2rem", background: "rgba(74,222,128,0.1)", border: "1px solid rgba(74,222,128,0.3)", borderRadius: "16px" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem", color: "#4ade80" }}>AIが返信文を即時生成</h2>
            <p style={{ color: "#94a3b8", marginBottom: "1.5rem" }}>口コミ内容を入力するだけで状況に合った返信文をAIが作成</p>
            <Link href="/" style={{ display: "inline-block", background: "linear-gradient(135deg, #4ade80, #22d3ee)", color: "#fff", padding: "1rem 2.5rem", borderRadius: "50px", fontWeight: "bold", textDecoration: "none" }}>無料で返信文を作成する →</Link>
          </div>
          <p style={{ textAlign: "center", color: "#475569", fontSize: "0.8rem", marginBottom: "2rem" }}>最終更新: {data.lastUpdated}</p>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "2rem" }}>
            <h3 style={{ textAlign: "center", color: "#94a3b8", marginBottom: "1rem" }}>他のAIツールも試してみる</h3>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="https://pawahara-ai.vercel.app" style={{ color: "#4ade80", textDecoration: "none", fontSize: "0.9rem" }}>パワハラ対策AI</Link>
              <Link href="https://iryou-claim-ai.vercel.app" style={{ color: "#4ade80", textDecoration: "none", fontSize: "0.9rem" }}>医療クレームAI</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
