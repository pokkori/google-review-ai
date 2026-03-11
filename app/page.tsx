import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google口コミ返信AI｜ネガティブ口コミに30秒でプロの返信文を自動生成",
  description: "Googleマップの口コミに悩む店舗・企業向け。★1〜2のネガティブ口コミも、AIが業種に合わせた誠実な返信文を即時生成。SEO効果もアップ。飲食・美容・クリニック・不動産・ホテル全業種対応。無料3回試せます。",
  keywords: "Google口コミ 返信,Googleマップ 口コミ 対応,ネガティブ口コミ 返信文,Googleビジネスプロフィール 返信,口コミ返信 テンプレート",
};

const INDUSTRIES = [
  { icon: "🍽", name: "飲食店", examples: ["料理・味への苦情", "待ち時間・混雑クレーム", "接客態度への不満"], pain: "★1口コミは集客に直結。早期返信でSEO改善。" },
  { icon: "💇", name: "美容・サロン", examples: ["仕上がりへの不満", "予約・待ち時間", "スタッフ対応への苦情"], pain: "リピーター離脱を防ぐ誠実な返信が必須。" },
  { icon: "🏥", name: "クリニック・医院", examples: ["待ち時間の長さ", "説明不足・対応の冷たさ", "料金への疑問"], pain: "医療機関は信頼性が命。慎重かつ誠実な返信を。" },
  { icon: "🏨", name: "ホテル・旅館", examples: ["設備・清潔感への不満", "スタッフ対応", "料金対比への不満"], pain: "OTA評価と連動。迅速な返信で次の予約を守る。" },
  { icon: "🏠", name: "不動産・住宅", examples: ["対応の遅さ・不親切", "物件説明との差異", "アフターサービス不満"], pain: "高額取引の信頼感を返信で取り戻す。" },
  { icon: "🛒", name: "小売・EC", examples: ["商品品質への不満", "配送・梱包トラブル", "スタッフ態度"], pain: "口コミ返信がそのまま新規顧客への告知になる。" },
];

const FEATURES = [
  { icon: "💬", title: "ネガティブ口コミ返信文", desc: "★1〜2の厳しい口コミにも、誠実さと毅然さを両立した返信文を生成。謝罪の過不足なく、次回来店を促す一文まで自動で追加。" },
  { icon: "⭐", title: "ポジティブ口コミへの感謝文", desc: "★4〜5の良い口コミにも、定型文でない個性的な感謝返信を生成。読んだ人が「良いお店だ」と感じる温かみのある文体で。" },
  { icon: "📈", title: "SEO最適化アドバイス", desc: "Googleのアルゴリズムに有効なキーワードを自然に盛り込んだ返信文を生成。返信すること自体が検索順位改善につながります。" },
  { icon: "🔄", title: "返信パターン複数生成", desc: "同じ内容でトーンを変えた返信案を複数生成。丁寧・カジュアル・毅然の中から状況に合わせて選択可能。" },
];

const HOW_TO = [
  { step: "1", title: "業種と評価を選択", desc: "業種をタップし、口コミの★数を選ぶだけ。" },
  { step: "2", title: "口コミ本文を貼り付け", desc: "Googleマップから口コミをコピーして貼り付け。" },
  { step: "3", title: "返信文を即時生成", desc: "AIが30秒でプロの返信文を自動生成します。" },
  { step: "4", title: "コピーしてGoogleに貼り付け", desc: "1クリックでコピーし、Googleビジネスプロフィールに投稿。" },
];

const VOICES = [
  { role: "飲食店オーナー・40代", text: "★1の口コミが来るたびに何時間も悩んでいました。このツールで30秒で返信できるようになり、口コミ評価も4.1→4.4に上がりました。" },
  { role: "美容院院長・30代", text: "ネガティブな口コミへの返信が怖くて放置していましたが、このツールの返信文は誠実で適切。安心して使えています。" },
  { role: "整骨院経営者・50代", text: "医療関係の口コミ返信は言葉一つで問題になりかねない。AIが適切な表現を選んでくれるので助かっています。" },
];

export default function GoogleReviewLP() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="border-b border-gray-100 px-6 py-4 sticky top-0 bg-white/95 backdrop-blur z-10">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="font-bold text-gray-900">Google口コミ返信AI</span>
          <Link href="/tool" className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700">
            無料で試す
          </Link>
        </div>
      </nav>

      {/* ヒーロー */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="inline-block bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-6">
          飲食・美容・クリニック・ホテル・不動産 全業種対応
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Google口コミへの返信文を<br /><span className="text-blue-600">30秒</span>で自動生成
        </h1>
        <p className="text-lg text-gray-500 mb-4 max-w-2xl mx-auto">
          ネガティブな★1口コミも、ポジティブな★5口コミも。AIが業種・状況に合わせた<strong className="text-gray-700">誠実でSEO効果の高い返信文</strong>を即時生成。放置口コミをゼロにして集客力を高めます。
        </p>
        <Link href="/tool" className="inline-block bg-blue-600 text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-100 mb-3">
          無料で3回試す →
        </Link>
        <p className="text-xs text-gray-400">クレジットカード不要・登録不要</p>
      </section>

      {/* 課題 */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
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
              <div key={p} className="flex gap-3 bg-white rounded-xl p-4 border border-gray-200">
                <span className="text-red-500 text-lg shrink-0">✗</span>
                <p className="text-sm text-gray-700">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 使い方 */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-10">使い方は4ステップ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {HOW_TO.map(s => (
              <div key={s.step} className="text-center">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-lg flex items-center justify-center mx-auto mb-3">{s.step}</div>
                <p className="font-semibold text-gray-900 mb-1 text-sm">{s.title}</p>
                <p className="text-xs text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 機能 */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-3">生成される返信文の特長</h2>
          <p className="text-center text-gray-500 text-sm mb-10">1回の生成で複数パターンの返信案が出力されます</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {FEATURES.map(f => (
              <div key={f.title} className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-2xl mb-2">{f.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 業種別 */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-3">業種別の返信に特化</h2>
          <p className="text-center text-gray-500 text-sm mb-10">業種を選ぶだけで、その業界の慣習・表現・トーンを踏まえた返信文が生成されます</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {INDUSTRIES.map(ind => (
              <div key={ind.name} className="border border-gray-200 rounded-xl p-5">
                <div className="text-2xl mb-2">{ind.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{ind.name}</h3>
                <p className="text-xs text-blue-600 font-medium mb-3">{ind.pain}</p>
                <ul className="space-y-1">
                  {ind.examples.map(e => (
                    <li key={e} className="text-xs text-gray-500 flex items-center gap-1">
                      <span className="text-gray-300">▶</span>{e}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 声 */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-10">ご利用者の声</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {VOICES.map((v, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-gray-200">
                <div className="flex text-yellow-400 text-sm mb-3">{"★★★★★"}</div>
                <p className="text-sm text-gray-700 mb-3 leading-relaxed">{v.text}</p>
                <p className="text-xs text-gray-400">{v.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 料金 */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-3">料金プラン</h2>
          <p className="text-center text-gray-500 text-sm mb-10">全プランでネガティブ・ポジティブ口コミ両方に対応</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { name: "お試し", price: "無料", sub: "3回まで", features: ["全機能を試せます", "登録不要"], href: "/tool", cta: "無料で試す", highlight: false },
              { name: "スタンダード", price: "¥2,980", sub: "/月（月50件）", features: ["月50件まで生成", "業種別最適化", "SEOアドバイス付き"], href: "/tool", cta: "申し込む", highlight: true },
              { name: "ビジネス", price: "¥4,980", sub: "/月（無制限）", features: ["生成無制限", "複数店舗対応", "優先サポート"], href: "/tool", cta: "申し込む", highlight: false },
            ].map(plan => (
              <div key={plan.name} className={`rounded-2xl border p-6 relative ${plan.highlight ? "border-blue-500 shadow-lg" : "border-gray-200"}`}>
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs bg-blue-600 text-white px-3 py-0.5 rounded-full whitespace-nowrap">一番人気</div>
                )}
                <p className="font-bold text-gray-900 mb-1">{plan.name}</p>
                <p className="text-2xl font-bold text-blue-600">{plan.price}<span className="text-sm font-normal text-gray-500">{plan.sub}</span></p>
                <ul className="mt-4 mb-5 space-y-2">
                  {plan.features.map(f => (
                    <li key={f} className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="text-green-500">✓</span>{f}
                    </li>
                  ))}
                </ul>
                <Link href={plan.href} className={`block w-full text-center text-sm font-medium py-2.5 rounded-lg ${plan.highlight ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-10">よくある質問</h2>
          <div className="space-y-4">
            {[
              { q: "生成された返信文はそのまま使えますか？", a: "はい。店名・担当者名などの固有情報を差し替えるだけで、そのままGoogleビジネスプロフィールに投稿できます。" },
              { q: "事実と異なる口コミへの返信もできますか？", a: "はい。「事実と異なる点を丁寧に訂正する」モードで生成できます。感情的にならず、事実のみを述べた毅然とした返信文を作成します。" },
              { q: "返信することでSEOはどう変わりますか？", a: "Googleは口コミへの返信を評価します。返信率が高い店舗は地図検索の表示順位が改善される傾向があります。AIが自然なキーワードを含む返信文を生成します。" },
              { q: "解約はいつでもできますか？", a: "はい。いつでも解約可能です。解約後は次の更新日まで利用できます。" },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-gray-200">
                <p className="font-semibold text-gray-900 mb-2 text-sm">Q. {faq.q}</p>
                <p className="text-sm text-gray-600">A. {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16 text-center px-6">
        <h2 className="text-2xl font-bold text-white mb-3">今すぐ口コミ返信の悩みを解消する</h2>
        <p className="text-blue-100 text-sm mb-8">登録不要・クレジットカード不要で3回無料</p>
        <Link href="/tool" className="inline-block bg-white text-blue-600 font-bold text-lg px-8 py-4 rounded-xl hover:bg-blue-50 shadow-lg">
          無料で返信文を生成する →
        </Link>
        <p className="text-blue-200 text-xs mt-4">※本サービスはAIによる文章生成支援ツールです。生成された返信文は内容をご確認の上ご使用ください。</p>
      </section>

      <footer className="border-t py-6 text-center text-xs text-gray-400 space-x-4">
        <Link href="/legal" className="hover:underline">特定商取引法に基づく表記</Link>
        <Link href="/privacy" className="hover:underline">プライバシーポリシー</Link>
        <Link href="/terms" className="hover:underline">利用規約</Link>
      </footer>
    </main>
  );
}
