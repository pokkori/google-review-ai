import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAdScript } from "@/components/GoogleAdScript";
import "./globals.css";
import { InstallPrompt } from "@/components/InstallPrompt";


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
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
    images: [`${SITE_URL}/og-image.png`],
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
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <InstallPrompt />
        <Analytics />
        <GoogleAdScript />
      </body>
    </html>
  );
}
