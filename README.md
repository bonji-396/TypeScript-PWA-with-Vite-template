# Vite で TypeScript + PWA のテンプレート

Viteを利用して、TypeScriptでPWAのフロントエンドアプリを作るためのテンプレートです。

PWA実装には、vite-plugin-pwaや、workbox-precachingをしようせず、手動で設定します。

## 主な技術構成
- TypeScript
- PWA
- Sass
- RxJS


## 導入
```zsh
npm install
```

### 実際の導入

- ` npm create vite`コマンド  
   ```zsh
   npm create vite@latest TypeScript-PWA-with-Vite-and-Workbox-template -- --template vanilla-ts
   cd TypeScript-PWA-with-Vite-template
   npm install rxjs
   npm install -D sass typescript @types/serviceworker
   ```
- `public/sw.js`を作成
- `public/manifest.json`の作成
- `src/main.ts`を修正
- `vite.config.ts`の作成
- `src/styles/main.scss`の作成
- `index.html`を修正
- `public/icons`に画像を追加


### 開発利用パッケージ

これらのパッケージは主に開発環境の構築とビルドプロセスの自動化に使用されています。
- @types/serviceworker:  
Service Worker APIのTypeScript型定義ファイル。PWA（Progressive Web App）開発において、Service Workerを型安全に実装するために使用
- sass:  
Webで人気の高いCSSプリプロセッサー。変数、ネスト、ミックスインなどの機能を提供し、効率的なスタイルシート開発を可能にする
- typescript:  
JavaScriptに静的型付けを追加したプログラミング言語。コード品質の向上とIDEのサポート強化に寄与する
- vite:  
モダンなフロントエンド開発ツール。超高速な開発サーバーとビルドツールを提供し、ESモジュールを活用した効率的な開発が可能

### 本番利用パッケージ
- rxjs: JavaScriptのリアクティブ拡張ライブラリ

## 開発サーバー起動
```
npm run dev
```
## ビルド
```
npm run build
```
## ビルド結果のプレビュー
```
npm run preview
```