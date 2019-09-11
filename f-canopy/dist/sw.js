/**
 * Minimal service worker to pass Google PWA requirements:
 * https://developers.google.com/web/fundamentals/app-install-banners/
 */

self.addEventListener('install', (event) => {
  return self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate' || (event.request.method === 'GET' && event.request.headers.get('accept').includes('text/html'))) {
    event.respondWith( // network then cache strategy
      fetch(event.request).catch(() => caches.match(event.request))
    );
  }
});
