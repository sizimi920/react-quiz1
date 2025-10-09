# React Quiz App

シンプルなクイズアプリケーションです。React + Vite + React Routerで構築されており、3つのページ（ホーム → クイズ → 結果）からなる直感的なフローを提供します。

## 🚀 デモ

[ライブデモを見る](https://sizimi920.github.io/quiz/) (GitHub Pages)

## ✨ 機能

- 📝 複数選択式クイズ
- 🎊 結果表示とお祝いエフェクト
- 📱 レスポンシブデザイン
- ⚡ 高速なホットリロード開発環境
- 🚀 GitHub Pagesへの自動デプロイ

## 🛠️ 技術スタック

- **Frontend**: React 19 + Vite
- **Routing**: React Router DOM v7
- **Styling**: CSS Modules
- **Effects**: React Confetti
- **Deployment**: GitHub Pages
- **Linting**: ESLint

## 🏗️ プロジェクト構造

```text
src/
├── pages/           # ページコンポーネント
│   ├── HomePage..jsx     # ホームページ
│   ├── QuizPage.jsx      # クイズページ
│   └── ResultPage.jsx    # 結果ページ
├── components/      # 再利用可能なUIコンポーネント
│   ├── Button/
│   ├── Display/
│   ├── Loading/
│   └── Result/
├── data/
│   └── quiz.js      # クイズデータ
├── const.js         # ルート定数
└── assets/          # 静的アセット
```

## 🚀 開発環境のセットアップ

### 前提条件

- Node.js (推奨: v18以上)
- npm

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/sizimi920/quiz.git
cd quiz

# 依存関係をインストール
npm install
```

### 開発サーバーの起動

```bash
# Windows (PowerShell実行ポリシーの問題を回避)
cmd /c "npm run dev"

# または通常の場合
npm run dev
```

アプリケーションは `http://localhost:5173/react-quiz/` で利用できます。

## 📦 ビルドとデプロイ

```bash
# プロダクションビルド
npm run build

# ビルド結果をローカルでプレビュー
npm run preview

# GitHub Pagesにデプロイ
npm run deploy
```

## 🎯 クイズデータの編集

クイズの質問と選択肢は `src/data/quiz.js` で管理されています：

```javascript
{
  question: "質問文",
  options: ["選択肢1", "選択肢2", "選択肢3", "選択肢4"],
  answerIndex: 0  // 正解のインデックス (0-3)
}
```

新しい問題を追加するには、配列に新しいオブジェクトを追加してください。

## 🔧 開発ガイドライン

- **コンポーネント**: 関数型コンポーネントのみ使用
- **ファイル命名**: PascalCaseで `.jsx` 拡張子
- **スタイル**: CSS Modulesを使用（`Component.module.css`）
- **ルーティング**: `const.js` からROUTES定数をインポート
- **リント**: コミット前に `npm run lint` を実行

## 🐛 トラブルシューティング

### PowerShellでnpmコマンドが実行できない場合

```bash
cmd /c "npm run dev"
```

### ルーティングエラーが発生する場合

- `vite.config.js` の `base: "/react-quiz/"` 設定を確認
- `App.jsx` の `BrowserRouter` に `basename="/react-quiz"` が設定されているか確認

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 🤝 コントリビューション

1. このリポジトリをフォーク
2. 機能ブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'feat: add amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成
