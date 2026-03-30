import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ShareButtons } from "@/components/ShareButtons";
import { AdBanner } from "@/components/AdBanner";
import { StreakBanner } from "@/components/StreakBanner";
import { UsageCounter } from "@/components/UsageCounter";
import { CrossSell } from "@/components/CrossSell";
import { TrustBadge } from "@/components/TrustBadge";

export const metadata: Metadata = {
  title: "Google口コミ返信AI｜ネガティブ口コミに30秒でプロの返信文を自動生成",
  description: "Googleマップの口コミに悩む店舗・企業向け。1〜2のネガティブ口コミも、AIが業種に合わせた誠実な返信文を即時生成。SEO効果もアップ。飲食・美容・クリニック・不動産・ホテル全業種対応。無料3回試せます。",
  keywords: "Google口コミ 返信,Googleマップ 口コミ 対応,ネガティブ口コミ 返信文,Googleビジネスプロフィール 返信,口コミ返信 テンプレート",
};

/* SVG icons for industries */
const IndustrySVG: Record<string, React.ReactNode> = {
  飲食店: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true"><path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>,
  "美容・サロン": <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>,
  "クリニック・医院": <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
  "ホテル・旅館": <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true"><path d="M3 21h18M3 7v14M21 7v14M6 7V3h12v4M9 21v-4h6v4M9 7h6"/></svg>,
  "不動産・住宅": <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>,
  "小売・EC": <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>,
};

/* Feature SVG icons */
const FeatureSVG = [
  <svg key="f1" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>,
  <svg key="f2" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#facc15" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
  <svg key="f3" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>,
  <svg key="f4" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
];

const INDUSTRIES = [
  { name: "飲食店", examples: ["料理・味への苦情", "待ち時間・混雑クレーム", "接客態度への不満"], pain: "1口コミは集客に直結。早期返信でSEO改善。" },
  { name: "美容・サロン", examples: ["仕上がりへの不満", "予約・待ち時間", "スタッフ対応への苦情"], pain: "リピーター離脱を防ぐ誠実な返信が必須。" },
  { name: "クリニック・医院", examples: ["待ち時間の長さ", "説明不足・対応の冷たさ", "料金への疑問"], pain: "医療機関は信頼性が命。慎重かつ誠実な返信を。" },
  { name: "ホテル・旅館", examples: ["設備・清潔感への不満", "スタッフ対応", "料金対比への不満"], pain: "OTA評価と連動。迅速な返信で次の予約を守る。" },
  { name: "不動産・住宅", examples: ["対応の遅さ・不親切", "物件説明との差異", "アフターサービス不満"], pain: "高額取引の信頼感を返信で取り戻す。" },
  { name: "小売・EC", examples: ["商品品質への不満", "配送・梱包トラブル", "スタッフ態度"], pain: "口コミ返信がそのまま新規顧客への告知になる。" },
];

const FEATURES = [
  { title: "ネガティブ口コミ返信文", desc: "1〜2の厳しい口コミにも、誠実さと毅然さを両立した返信文を生成。謝罪の過不足なく、次回来店を促す一文まで自動で追加。" },
  { title: "ポジティブ口コミへの感謝文", desc: "4〜5の良い口コミにも、定型文でない個性的な感謝返信を生成。読んだ人が「良いお店だ」と感じる温かみのある文体で。" },
  { title: "SEO最適化アドバイス", desc: "Googleのアルゴリズムに有効なキーワードを自然に盛り込んだ返信文を生成。返信すること自体が検索順位改善につながります。" },
  { title: "返信パターン複数生成", desc: "同じ内容でトーンを変えた返信案を複数生成。丁寧・カジュアル・毅然の中から状況に合わせて選択可能。" },
];

const HOW_TO = [
  { step: "1", title: "業種と評価を選択", desc: "業種をタップし、口コミの数を選ぶだけ。" },
  { step: "2", title: "口コミ本文を貼り付け", desc: "Googleマップから口コミをコピーして貼り付け。" },
  { step: "3", title: "返信文を即時生成", desc: "AIが30秒でプロの返信文を自動生成します。" },
  { step: "4", title: "コピーしてGoogleに貼り付け", desc: "1クリックでコピーし、Googleビジネスプロフィールに投稿。" },
];

const VOICES = [
  { role: "飲食店オーナー・40代", text: "1の口コミが来るたびに何時間も悩んでいました。このツールで30秒で返信できるようになり、口コミ評価も4.1→4.4に上がりました。" },
  { role: "美容院院長・30代", text: "ネガティブな口コミへの返信が怖くて放置していましたが、このツールの返信文は誠実で適切。安心して使えています。" },
  { role: "整骨院経営者・50代", text: "医療関係の口コミ返信は言葉一つで問題になりかねない。AIが適切な表現を選んでくれるので助かっています。" },
];

const glassCard = {
  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  border: "1px solid rgba(255,255,255,0.10)",
  borderRadius: "16px",
};

export default function GoogleReviewLP() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: '生成された返信文はそのまま使えますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい。店名・担当者名などの固有情報を差し替えるだけで、そのままGoogleビジネスプロフィールに投稿できます。' } },
              { '@type': 'Question', name: '事実と異なる口コミへの返信もできますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい。「事実と異なる点を丁寧に訂正する」モードで生成できます。感情的にならず、事実のみを述べた毅然とした返信文を作成します。' } },
              { '@type': 'Question', name: '返信することでSEOはどう変わりますか？', acceptedAnswer: { '@type': 'Answer', text: 'Googleは口コミへの返信を評価します。返信率が高い店舗は地図検索の表示順位が改善される傾向があります。AIが自然なキーワードを含む返信文を生成します。' } },
              { '@type': 'Question', name: '解約はいつでもできますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい。いつでも解約可能です。解約後は次の更新日まで利用できます。' } },
            ],
          }).replace(/</g, '\\u003c'),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Google口コミ返信AI',
            operatingSystem: 'Web',
            applicationCategory: 'BusinessApplication',
            offers: { '@type': 'Offer', price: 0, priceCurrency: 'JPY' },
          }).replace(/</g, '\\u003c'),
        }}
      />
    <main
      className="min-h-screen text-white"
      style={{
        background: "radial-gradient(ellipse at 20% 50%, rgba(59,130,246,0.12) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(99,102,241,0.08) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(59,130,246,0.06) 0%, transparent 50%), #0F0F1A",
      }}
    >
      {/* Nav */}
      <nav
        className="px-6 py-4 sticky top-0 z-10"
        style={{
          background: "rgba(15,15,26,0.85)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="font-bold text-white">Google口コミ返信AI</span>
          <Link
            href="/tool"
            aria-label="Google口コミ返信AIツールを無料で試す"
            className="text-sm font-bold px-5 py-2.5 rounded-xl min-h-[44px] flex items-center transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
              boxShadow: "0 0 15px rgba(59,130,246,0.3)",
            }}
          >
            無料で試す
          </Link>
        </div>
      </nav>

      <StreakBanner />

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div
          className="inline-block text-blue-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6"
          style={{ background: "rgba(59,130,246,0.15)", border: "1px solid rgba(59,130,246,0.25)" }}
        >
          飲食・美容・クリニック・ホテル・不動産 全業種対応
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          <span className="text-white">Google口コミへの返信文を</span><br />
          <span
            style={{
              background: "linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            30秒
          </span>
          <span className="text-white">で自動生成</span>
        </h1>
        <p className="text-lg text-slate-400 mb-4 max-w-2xl mx-auto">
          ネガティブな1口コミも、ポジティブな5口コミも。AIが業種・状況に合わせた<strong className="text-white">誠実でSEO効果の高い返信文</strong>を即時生成。放置口コミをゼロにして集客力を高めます。
        </p>
        <div className="max-w-xs mx-auto mb-4"><UsageCounter /></div>
        <div className="mb-4"><TrustBadge /></div>
        <Link
          href="/tool"
          aria-label="Google口コミ返信AIを無料で3回試す"
          className="inline-block font-bold text-lg px-8 py-4 rounded-2xl mb-3 transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.97] min-h-[52px]"
          style={{
            background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
            boxShadow: "0 0 25px rgba(59,130,246,0.35), 0 4px 15px rgba(0,0,0,0.3)",
            color: "#fff",
          }}
        >
          無料でAI返信文を生成
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="inline ml-2 -mt-0.5" aria-hidden="true"><polyline points="9,18 15,12 9,6"/></svg>
        </Link>
        <p className="text-xs opacity-60 mt-2">※登録不要・3回まで無料</p>
        <p className="text-xs text-slate-500">クレジットカード不要・登録不要</p>
      </section>

      {/* Pain points */}
      <section className="py-16 px-6" style={{ background: "rgba(255,255,255,0.02)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">こんな悩みを解決します</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {[
              "ネガティブ口コミへの返信文が思いつかず放置してしまう",
              "返信の言葉を間違えてさらに炎上しないか不安",
              "良い口コミへの感謝返信がいつも同じ定型文になる",
              "口コミ返信にかける時間がなく後回しになっている",
              "謝りすぎると弱く見られるが、強すぎると反感を買う",
              "Googleの口コミ評価が下がり集客に悪影響が出ている",
            ].map(p => (
              <div key={p} className="flex gap-3 p-4" style={glassCard}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" className="shrink-0 mt-0.5" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                <p className="text-sm text-slate-300">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">使い方は4ステップ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {HOW_TO.map(s => (
              <div key={s.step} className="text-center">
                <div
                  className="w-10 h-10 rounded-full font-bold text-lg flex items-center justify-center mx-auto mb-3"
                  style={{
                    background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
                    boxShadow: "0 0 12px rgba(59,130,246,0.3)",
                    color: "#fff",
                  }}
                >
                  {s.step}
                </div>
                <p className="font-semibold text-white mb-1 text-sm">{s.title}</p>
                <p className="text-xs text-slate-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6" style={{ background: "rgba(255,255,255,0.02)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-3">生成される返信文の特長</h2>
          <p className="text-center text-slate-500 text-sm mb-10">1回の生成で複数パターンの返信案が出力されます</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {FEATURES.map((f, i) => (
              <div key={f.title} className="p-6" style={glassCard}>
                <div className="mb-3">{FeatureSVG[i]}</div>
                <h3 className="font-bold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-slate-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-3">業種別の返信に特化</h2>
          <p className="text-center text-slate-500 text-sm mb-10">業種を選ぶだけで、その業界の慣習・表現・トーンを踏まえた返信文が生成されます</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {INDUSTRIES.map(ind => (
              <div key={ind.name} role="article" aria-label={`${ind.name}の口コミ返信サンプルを表示`} className="p-5" style={glassCard}>
                <div className="mb-3">{IndustrySVG[ind.name]}</div>
                <h3 className="font-bold text-white mb-2">{ind.name}</h3>
                <p className="text-xs text-blue-400 font-medium mb-3">{ind.pain}</p>
                <ul className="space-y-1">
                  {ind.examples.map(e => (
                    <li key={e} className="text-xs text-slate-400 flex items-center gap-1">
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="#3b82f6" aria-hidden="true"><polygon points="0,0 8,4 0,8"/></svg>
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voices */}
      <section className="py-16 px-6" style={{ background: "rgba(255,255,255,0.02)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">ご利用者の声</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {VOICES.map((v, i) => (
              <div key={i} className="p-5" style={glassCard}>
                <div className="flex gap-0.5 mb-3">
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#facc15" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
                <p className="text-sm text-slate-300 mb-3 leading-relaxed">{v.text}</p>
                <p className="text-xs text-slate-500">{v.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-3">料金プラン</h2>
          <p className="text-center text-slate-500 text-sm mb-10">全プランでネガティブ・ポジティブ口コミ両方に対応</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { name: "お試し", price: "\u00A5 0", sub: "3回まで", features: ["全機能を試せます", "登録不要"], href: "/tool", cta: "無料で試す", highlight: false },
              { name: "スタンダード", price: "\u00A52,980", sub: "/月（月50件）", features: ["月50件まで生成", "業種別最適化", "SEOアドバイス付き"], href: "/tool", cta: "申し込む", highlight: true },
              { name: "ビジネス", price: "\u00A54,980", sub: "/月（無制限）", features: ["生成無制限", "複数店舗対応", "優先サポート"], href: "/tool", cta: "申し込む", highlight: false },
            ].map(plan => (
              <div
                key={plan.name}
                className="p-6 relative"
                style={{
                  ...glassCard,
                  ...(plan.highlight ? { border: "1px solid rgba(59,130,246,0.4)", boxShadow: "0 0 20px rgba(59,130,246,0.15)" } : {}),
                }}
              >
                {plan.highlight && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs text-white px-3 py-0.5 rounded-full whitespace-nowrap font-bold"
                    style={{ background: "linear-gradient(135deg, #3b82f6, #2563eb)" }}
                  >
                    一番人気
                  </div>
                )}
                <p className="font-bold text-white mb-1">{plan.name}</p>
                <p className="text-2xl font-bold text-blue-400">{plan.price}<span className="text-sm font-normal text-slate-500">{plan.sub}</span></p>
                <ul className="mt-4 mb-5 space-y-2">
                  {plan.features.map(f => (
                    <li key={f} className="text-sm text-slate-400 flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><polyline points="20,6 9,17 4,12"/></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.href}
                  aria-label={`${plan.name}プラン（${plan.price}${plan.sub}）で${plan.cta}`}
                  className="block w-full text-center text-sm font-bold py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 min-h-[44px]"
                  style={
                    plan.highlight
                      ? { background: "linear-gradient(135deg, #3b82f6, #2563eb)", color: "#fff", boxShadow: "0 0 15px rgba(59,130,246,0.25)" }
                      : { background: "rgba(255,255,255,0.08)", color: "#94a3b8" }
                  }
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6" style={{ background: "rgba(255,255,255,0.02)" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">よくある質問</h2>
          <div className="space-y-4">
            {[
              { q: "生成された返信文はそのまま使えますか？", a: "はい。店名・担当者名などの固有情報を差し替えるだけで、そのままGoogleビジネスプロフィールに投稿できます。" },
              { q: "事実と異なる口コミへの返信もできますか？", a: "はい。「事実と異なる点を丁寧に訂正する」モードで生成できます。感情的にならず、事実のみを述べた毅然とした返信文を作成します。" },
              { q: "返信することでSEOはどう変わりますか？", a: "Googleは口コミへの返信を評価します。返信率が高い店舗は地図検索の表示順位が改善される傾向があります。AIが自然なキーワードを含む返信文を生成します。" },
              { q: "解約はいつでもできますか？", a: "はい。いつでも解約可能です。解約後は次の更新日まで利用できます。" },
            ].map((faq, i) => (
              <div key={i} className="p-5" style={glassCard}>
                <p className="font-semibold text-white mb-2 text-sm">Q. {faq.q}</p>
                <p className="text-sm text-slate-400">A. {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 text-center px-6">
        <div
          className="max-w-2xl mx-auto p-10"
          style={{
            background: "rgba(59,130,246,0.08)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(59,130,246,0.2)",
            borderRadius: "24px",
          }}
        >
          <h2 className="text-2xl font-bold text-white mb-3">今すぐ口コミ返信の悩みを解消する</h2>
          <p className="text-slate-400 text-sm mb-8">登録不要・クレジットカード不要で3回無料</p>
          <Link
            href="/tool"
            aria-label="Google口コミ返信AIツールで返信文を無料生成する"
            className="inline-block font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.97] min-h-[52px]"
            style={{
              background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
              boxShadow: "0 0 25px rgba(59,130,246,0.35), 0 4px 15px rgba(0,0,0,0.3)",
              color: "#fff",
            }}
          >
            無料で返信文を生成する
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="inline ml-2 -mt-0.5" aria-hidden="true"><polyline points="9,18 15,12 9,6"/></svg>
          </Link>
          <p className="text-slate-500 text-xs mt-4">※本サービスはAIによる文章生成支援ツールです。生成された返信文は内容をご確認の上ご使用ください。</p>
        </div>
      </section>

      {/* シェアセクション */}
      <section className="py-8 px-4 text-center">
        <p className="text-slate-400 text-sm mb-4">Google口コミ返信AIを友達にシェア</p>
        <ShareButtons url="https://google-review-ai.vercel.app" text="Google口コミ返信AIを使ってみた！" hashtags="Google口コミ返信AI" />
      </section>

      <CrossSell currentService="Google口コミ返信AI" />

      <footer
        className="py-6 text-center text-xs text-slate-500 space-x-4"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <Link href="/legal" aria-label="特定商取引法に基づく表記を見る" className="hover:underline hover:text-slate-300 transition-colors">特定商取引法に基づく表記</Link>
        <Link href="/privacy" aria-label="プライバシーポリシーを見る" className="hover:underline hover:text-slate-300 transition-colors">プライバシーポリシー</Link>
        <Link href="/terms" aria-label="利用規約を見る" className="hover:underline hover:text-slate-300 transition-colors">利用規約</Link>
        <Link href="/cancel" aria-label="解約・退会ページを見る" className="hover:underline hover:text-slate-300 transition-colors">解約・退会</Link>
        <div className="flex items-center justify-center gap-2 text-xs text-slate-500 mt-4">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          SSL暗号化通信 | データは安全に保護されています
        </div>
      </footer>
      <AdBanner slot="" />
    </main>
    </>
  );
}
