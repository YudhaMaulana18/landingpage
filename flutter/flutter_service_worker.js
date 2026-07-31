/* SIPRAKATA: service worker disabled intentionally.
   This file unregisters itself and clears caches so every page load
   always fetches the latest build from the network. */
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
      await self.registration.unregister();
      await self.clients.claim();
    })()
  );
});

self.addEventListener('fetch', () => {});