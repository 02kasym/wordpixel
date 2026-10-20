// Generated at build time by src/pwa/service-worker.ts
const CACHE = 'wordpixel-e31933d40bcf'
const FILES = ["./","./index.html","./assets/index-QL5jFZpt.js","./assets/esm-BLiD8P4H.js","./assets/esm-DYyHMzps.js","./assets/esm-o4xm9LEQ.js","./assets/web-Ch8L6ETs.js","./assets/web-Dt00gCOX.js","./assets/web-R9zklxc_.js","./assets/biome-01-Boor2z0D.webp","./assets/biome-02-ylQAof7H.webp","./assets/biome-03-ygU_n2_h.webp","./assets/biome-04-BJYVGfvY.webp","./assets/biome-05-UWavv5DN.webp","./assets/biome-06-ZE5dq3cd.webp","./assets/biome-07-8GhgFLFy.webp","./assets/biome-08-DDTdn0TD.webp","./assets/biome-09-DRpCYrTF.webp","./assets/biome-10-DHauUoh9.webp","./assets/biome-11-zzJDeqLf.webp","./assets/index-C5kx-Xwj.css","./assets/press-start-2p-cyrillic-400-normal-DBn7fddJ.woff2","./assets/press-start-2p-latin-400-normal-KLytu4cr.woff","./assets/press-start-2p-latin-400-normal-_wFEWmAB.woff2","./apple-touch-icon.png","./favicon-32.png","./icon-192.png","./icon-512.png","./manifest.webmanifest"]

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(FILES)).then(() => self.skipWaiting()))
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key.startsWith('wordpixel-') && key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  )
})

// Cache first: the app never needs the internet once installed. ignoreVary: servers send
// «Vary: Origin», and module scripts carry an Origin header the cached copies were saved without.
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return
  const lookup = event.request.mode === 'navigate'
    ? caches.match('./index.html', { ignoreVary: true })
    : caches.match(event.request, { ignoreSearch: true, ignoreVary: true })
  event.respondWith(lookup.then((cached) => cached || fetch(event.request)))
})
