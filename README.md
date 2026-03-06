# AIクレーム対応文ジェネレーター

> クレーム内容を入力するだけで、プロ品質の対応文をAIが自動生成するSaaSサービス

**本番URL**: https://claim-ai-beryl.vercel.app

---

## サービス概要

飲食・小売・ECサイトなど業種別のクレーム対応文をClaude Haiku AIが瞬時に生成。  
お詫び文・原因説明・再発防止策・締めの言葉を構成通りに出力する。

## 料金プラン

| プラン | 価格 | 制限 |
|--------|------|------|
| お試し | 無料 | 3回まで |
| スタンダード | ¥4,980/月 | 月100件 |
| ビジネス | ¥9,800/月 | 無制限 |

## 技術スタック

- **フレームワーク**: Next.js 14 (App Router)
- **言語**: TypeScript
- **スタイル**: Tailwind CSS
- **AI**: Anthropic Claude Haiku (claude-haiku-4-5-20251001)
- **デプロイ**: Vercel
- **決済**: Stripe（サブスクリプション）
- **アナリティクス**: Vercel Analytics

## ディレクトリ構成

```
claim-ai/
├── app/
│   ├── page.tsx          # LP（ランディングページ）
│   ├── layout.tsx        # レイアウト・メタデータ
│   ├── tool/
│   │   └── page.tsx      # ツール画面（フォーム・結果表示・Paywall）
│   ├── success/
│   │   └── page.tsx      # 決済完了ページ
│   └── api/
│       ├── generate/
│       │   └── route.ts  # Claude API呼び出し・レート制限・Cookie管理
│       └── stripe/
│           ├── checkout/
│           │   └── route.ts  # Stripeセッション作成
│           └── verify/
│               └── route.ts  # 決済完了確認・Cookie付与
├── .env.local            # 環境変数（Vercelに設定済み）
└── package.json
```

## セキュリティ・制限

- **使用制限**: Cookieベースでサーバー側管理（3回まで無料）
- **レート制限**: 1分間10リクエストまで/IP
- **エラーハンドリング**: API障害・タイムアウト対応済み

## 環境変数

| 変数名 | 説明 |
|--------|------|
| `ANTHROPIC_API_KEY` | Anthropic APIキー |
| `STRIPE_SECRET_KEY` | Stripe シークレットキー |
| `STRIPE_PRICE_STD` | スタンダードプランの Price ID |
| `STRIPE_PRICE_BIZ` | ビジネスプランの Price ID |

## ローカル起動

```bash
npm install
echo "ANTHROPIC_API_KEY=your_key" > .env.local
npm run dev
```

## デプロイ

```bash
npx vercel --prod
```
