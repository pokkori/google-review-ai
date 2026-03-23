import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";


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
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
