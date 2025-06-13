/// <reference lib="webworker" />

self.addEventListener('install', (event) => {
  // 캐싱 없이 바로 활성화
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
