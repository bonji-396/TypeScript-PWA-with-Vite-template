/// <reference lib="webworker" />
/// <reference types="vite/client" />

import { precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching';
import { clientsClaim } from 'workbox-core';

declare let self: ServiceWorkerGlobalScope;

// Service Workerの即時有効化
self.skipWaiting();
clientsClaim();

// キャッシュの古いバージョンをクリーンアップ
cleanupOutdatedCaches();

// プリキャッシュを設定
precacheAndRoute(self.__WB_MANIFEST);

// インストール時の処理
self.addEventListener('install', (event) => {
  console.log('Service Worker installing.', event);
});

// アクティベート時の処理
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating.', event);
});

// フェッチ時の処理
self.addEventListener('fetch', (event) => {
  console.log('Fetching:', event.request.url);
});