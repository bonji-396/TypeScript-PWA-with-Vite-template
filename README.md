# Vite で TypeScript + PWA のテンプレート

Viteを利用して、TypeScriptでPWAのフロントエンドアプリを作るためのテンプレートです。

PWA実装には、vite-plugin-pwaや、workbox-precachingを使用せず、手動で設定します。


## 主な技術構成
- Node.js
- TypeScript
- PWA
- Sass
- RxJS


## 行いたいこと

基本的には、PWAのフロントエンドをTypeScriptで記述し作成するためのテンプレートとして利用したい。
最低限以下の導入が済んだ状態を条件としています。

- `manifest.json`  
まずは、拡張機能やプログレッシブウェブアプリ（PWA）の動作を定義するJSON形式のファイルを初期で導入。
- `serivce-worker.ts`  
TypeScriptにて、service-worker.tsを書き、service-worker.jsをにコンパイルして利用する。またキャッシュ戦略や同期処理なども、PWAライブラリ等を利用せずに、自身で実装したいため最低限のコードのみを記載。
- `sass`  
scssの利用に慣れているので、sassの導入はしたかった。
- `rxjs`  
機能として利用するJavaScript用ライブラリをサンプル導入例として、リアクティブプログラミングライブラリを選択。

また、開発効率を上げるため、開発サーバーでの自動更新で反映させたい。


## 導入
```zsh
npm install
```

### 実際の導入

- ` npm create vite`コマンド  
   ```zsh
   npm create vite@latest TypeScript-PWA-with-Vite-template -- --template vanilla-ts
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

|パッケージ|説明|
|---|---|
|@types/serviceworker|Service Workerのための TypeScript型定義ファイル。PWAの開発において、Service WorkerのAPIを型安全に利用するために必要です。|
|sass|SASSプリプロセッサのNode.js実装。SCSSファイルをCSSにコンパイルするために使用します。
|typescript|JavaScriptに静的型付けを追加するプログラミング言語。型安全性とIDEのサポートを強化します。|
|vite|モダンなフロントエンド開発ツール。超高速な開発サーバーとビルドツールを提供し、ESモジュールを活用した効率的な開発が可能|


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