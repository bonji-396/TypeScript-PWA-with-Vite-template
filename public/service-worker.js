"use strict";
/// <reference lib="webworker" />
/* eslint-disable no-restricted-globals */
const CACHE_CONFIG = {
    cacheName: 'v1',
    cacheFiles: [
        '/',
        '/index.html',
        '/manifest.json',
        '/icons/favicon.png',
        '/icons/icon-192x192.png',
        '/icons/icon-512x512.png'
    ]
};
// インストール時のキャッシュ
self.addEventListener('install', (event) => {
    event.waitUntil(caches.open(CACHE_CONFIG.cacheName)
        .then(cache => {
        console.log('Cache opened');
        return cache.addAll(CACHE_CONFIG.cacheFiles);
    })
        .then(() => self.skipWaiting()));
});
// アクティベート時の古いキャッシュ削除
self.addEventListener('activate', (event) => {
    event.waitUntil(Promise.all([
        caches.keys().then(cacheNames => {
            return Promise.all(cacheNames
                .filter(name => name !== CACHE_CONFIG.cacheName)
                .map(name => caches.delete(name)));
        }),
        self.clients.claim()
    ]));
});
// フェッチ時のキャッシュ戦略
self.addEventListener('fetch', (event) => {
    event.respondWith(caches.match(event.request)
        .then(response => {
        if (response) {
            return response;
        }
        return fetch(event.request);
    }));
});
