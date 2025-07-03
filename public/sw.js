/// <reference lib="webworker" />

const CACHE_NAME = 'lani-devlog-v1';
const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/assets/fonts/SpoqaHanSansNeo-Regular.woff2',
  '/assets/fonts/SpoqaHanSansNeo-Medium.woff2',
  '/assets/fonts/SpoqaHanSansNeo-Bold.woff2',
  '/assets/images/icons/icon.png',
  '/favicon.ico',
];

// 설치 시 정적 자산 캐싱
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting()),
  );
});

// 활성화 시 오래된 캐시 삭제
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
          }),
        );
      })
      .then(() => self.clients.claim()),
  );
});

// 네트워크 요청 처리
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // 외부 이미지 요청은 브라우저가 직접 처리하도록 제외
  if (
    request.destination === 'image' &&
    !request.url.startsWith(self.location.origin)
  ) {
    return; // Service Worker가 개입하지 않음
  }

  // 정적 자산: 캐시 우선 전략
  if (
    request.destination === 'style' ||
    request.destination === 'script' ||
    request.destination === 'font' ||
    request.url.includes('/assets/')
  ) {
    event.respondWith(
      caches.match(request).then((response) => {
        return (
          response ||
          fetch(request).then((fetchResponse) => {
            const responseClone = fetchResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
            return fetchResponse;
          })
        );
      }),
    );
    return;
  }

  // HTML 페이지: 네트워크 우선 전략 (최신 콘텐츠 우선)
  if (request.mode === 'navigate' || request.destination === 'document') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // 성공적으로 가져온 페이지 캐싱
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseClone);
          });
          return response;
        })
        .catch(() => {
          // 네트워크 실패 시 캐시된 페이지 반환
          return caches.match(request).then((response) => {
            return response || caches.match('/'); // 오프라인 폴백
          });
        }),
    );
    return;
  }

  // 나머지 요청은 기본 네트워크 처리
});
