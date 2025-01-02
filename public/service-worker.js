"use strict";
/// <reference lib="webworker" />
// インストール時のキャッシュ
self.addEventListener('install', (event) => {
    console.log('Service Worker installed', event);
});
// アクティベート時の古いキャッシュ削除
self.addEventListener('activate', (event) => {
    console.log('Service Worker activated', event);
});
// フェッチ時のキャッシュ戦略
self.addEventListener('fetch', (event) => {
    console.log('Fetching:', event.request.url);
});
