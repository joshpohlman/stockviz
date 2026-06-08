/** Minimal SW — clears stale caches on deploy; does not intercept fetches (avoids broken refreshes). */
const CACHE_VERSION = 'stockviz-v3';

self.addEventListener('install', (e) => {
  e.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((names) => Promise.all(names.map((n) => caches.delete(n))))
      .then(() => self.clients.claim()),
  );
});