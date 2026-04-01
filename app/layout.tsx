import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import FeedbackButton from "@/components/FeedbackButton";
import { GoogleAdScript } from "@/components/GoogleAdScript";
import "./globals.css";
import { InstallPrompt } from "@/components/InstallPrompt";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});


const SITE_URL = "https://google-review-ai.vercel.app";
const TITLE = "Google口コミ返信AI｜30秒でプロ品質の返信文を自動生成";
const DESC = "Google口コミにAIが最適な返信文を自動生成。低評価・高評価・中評価に対応。飲食・美容・クリニック・ホテルなど業種別対応。SEOアドバイス付き・無料3回。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: ["Google口コミ返信", "口コミ対応", "AI返信文", "Googleビジネスプロフィール", "口コミ自動生成"],
  openGraph: {
    title: TITLE,
    description: DESC,
    url: SITE_URL,
    siteName: "Google口コミ返信AI",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
    images: [`${SITE_URL}/opengraph-image`],
  },
  metadataBase: new URL(SITE_URL),
  manifest: "/manifest.json",
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "ホーム", "item": SITE_URL },
    { "@type": "ListItem", "position": 2, "name": "口コミ返信AIツール", "item": `${SITE_URL}/tool` },
  ],
};

const appLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Google口コミ返信AI",
  "url": SITE_URL,
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": DESC,
  "inLanguage": "ja",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "JPY",
    "description": "無料3回・スタンダード¥2,980/月・ビジネス¥4,980/月"
  },
  "featureList": [
    "Google口コミへの返信文自動生成",
    "1〜5全評価対応",
    "業種別最適化（飲食・美容・クリニック・ホテル等）",
    "SEOアドバイス付き",
    "多言語対応"
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "どんな口コミに対応できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "1〜5の全評価に対応しています。ネガティブな低評価口コミ（1〜2）はもちろん、ポジティブな高評価口コミ（4〜5）への感謝返信文も生成できます。飲食店・美容サロン・クリニック・ホテル・不動産・小売店など業種別に最適化した返信文を自動生成します。",
      },
    },
    {
      "@type": "Question",
      name: "返信文の著作権はどうなりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "生成された返信文の著作権はユーザー様に帰属します。AIが生成した文章をそのまま、または編集してGoogleビジネスプロフィールへ投稿することができます。",
      },
    },
    {
      "@type": "Question",
      name: "無料で何回使えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "無料プランでは3回まで返信文を生成できます。クレジットカード不要・登録不要でお試しいただけます。それ以上ご利用いただく場合は、月額¥2,980のスタンダードプラン（月50件）または月額¥4,980のビジネスプラン（無制限）をご利用ください。",
      },
    },
    {
      "@type": "Question",
      name: "業種別の返信テンプレートはありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい。飲食店・美容サロン・クリニック・歯科・ホテル・旅館・不動産・小売店の各業種に特化した返信文を生成します。業種を選択するだけで、その業界の慣習・表現・トーンを踏まえた適切な返信文が自動で生成されます。",
      },
    },
    {
      "@type": "Question",
      name: "口コミ返信に法的リスクはありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "本ツールはAIによる文章生成支援ツールです。生成された返信文は内容をご確認の上ご使用ください。事実と異なる記述や名誉毀損に当たる表現が含まれていないかご確認いただくことを推奨しています。特に医療機関・法律関連の口コミ返信は、専門家への確認も合わせてご検討ください。",
      },
    },
    {
      "@type": "Question",
      name: "星1の悪い口コミへの返信はどう書けばいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "星1の低評価口コミへの返信は、(1)謝罪と感謝（貴重なご意見への感謝）、(2)事実確認（状況の確認と再発防止策）、(3)個別対応の案内（直接連絡先の提供）の3構成が基本です。本AIは口コミの内容を読み取り、感情的にならず誠実で信頼感を高める返信文を自動生成します。反論や言い訳を避けた、ブランド評価を守る返信を提案します。",
      },
    },
    {
      "@type": "Question",
      name: "返信後に口コミを削除してもらえることはありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "誠実な返信を行うことで、投稿者が自発的に口コミを削除・修正するケースがあります。また、Googleのポリシー違反（スパム・虚偽・競合による妨害行為等）の場合はGoogleへの報告で削除申請が可能です。本AIは返信文生成と合わせて「削除申請の可否判定」アドバイスも提供します。",
      },
    },
    {
      "@type": "Question",
      name: "複数店舗を一括管理できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ビジネスプラン（¥4,980/月）では複数店舗の口コミ返信を一括管理できます。チェーン店・FC加盟店・複数拠点の事業者様に最適です。店舗ごとにトーン・ブランドガイドラインを設定した返信文生成も対応しています。",
      },
    },
    {
      "@type": "Question",
      name: "英語の口コミにも対応していますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい。英語・中国語・韓国語の口コミに対して、日本語または各言語での返信文を生成できます。インバウンド客が多い飲食・宿泊・観光関連の事業者様に特に有用です。",
      },
    },
    {
      "@type": "Question",
      name: "返信文をそのまま使っていいですか、カスタマイズが必要ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AIが生成した返信文は基本的にそのまま使用できますが、店舗名・担当者名・具体的な対応策など個別情報を追記することで、より効果的な返信文になります。「雛形として使い、最後の一文だけカスタマイズする」スタイルが多くのユーザーに好評です。",
      },
    },
    {
      "@type": "Question",
      name: "口コミ返信はSEO（検索順位）に影響しますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、影響します。Googleビジネスプロフィールの口コミ返信率・返信速度はローカルSEO（Googleマップ上位表示）の評価要因とされています。全口コミに迅速に返信することで、Googleマップでの表示順位改善につながります。本AIは返信文とともにSEO観点のアドバイスも提供します。",
      },
    },
    {
      "@type": "Question",
      name: "事実と異なる口コミへの返信はどうすればいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "事実誤認の口コミには、感情的にならず冷静に事実を示す返信が有効です。「誤った情報」と直接批判するのではなく、「弊社では〇〇のような対応をしています」と自社の実態を伝える形が推奨されます。明らかな虚偽情報はGoogleへの削除申請（ポリシー違反報告）と並行して対応することをおすすめします。",
      },
    },
    {
      "@type": "Question",
      name: "返信文の生成にかかる時間はどのくらいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "口コミ内容の入力から返信文生成まで約15〜30秒です。業種・評価・口コミ内容を入力するだけで、最適化された返信文を即時生成します。1件の返信作業を平均5分から30秒に短縮できます。",
      },
    },
    {
      "@type": "Question",
      name: "クレームのある口コミに返信した後、さらにクレームが来たらどうすればいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "公開の場でのやり取りが長引く場合は、「お手数ですが直接お問い合わせいただけますか（メール・電話等）」と個別対応に移行させることを推奨します。Googleの口コミは公開されるため、第三者（潜在顧客）への印象も意識した誠実・簡潔な対応が重要です。本AIはこうしたエスカレーション対応の返信テンプレートも提供します。",
      },
    },
    {
      "@type": "Question",
      name: "解約はいつでもできますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "マイページから次回更新日前にいつでも解約できます。解約後も当月末まで全機能をご利用いただけます。違約金・解約手数料は一切かかりません。",
      },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(appLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <InstallPrompt />
        <FeedbackButton />
        <Analytics />
        <SpeedInsights />
        <GoogleAdScript />
        {process.env.NEXT_PUBLIC_CLARITY_ID && process.env.NODE_ENV === 'production' && (
          <Script
            id="clarity-init"
            strategy="afterInteractive"
          >
            {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${process.env.NEXT_PUBLIC_CLARITY_ID}");`}
          </Script>
        )}
      </body>
    </html>
  );
}
