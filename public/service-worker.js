"use strict";
/// <reference lib="webworker" />
// インストール時のキャッシュ
self.addEventListener('install', (event) => {
    console.log('[Service Worker] installed:', event);
});
// アクティベート時の古いキャッシュ削除
self.addEventListener('activate', (event) => {
    console.log('[Service Worker] activated:', event);
    console.log('[Service Worker] activatedactivatedactivatedactivated:');
});
// フェッチ時のキャッシュ戦略
self.addEventListener('fetch', (event) => {
    console.log('[Service Worker] Fetching:', event.request.url);
    console.log('[Service Worker] FetchingFetchingFetchingFetching:');
});
