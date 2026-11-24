/* MoneyFlow service worker — app shell offline.
   Per forzare l'aggiornamento di tutti i file cambia VERSION. */
const VERSION = 'moneyflow-v1';
const RUNTIME = 'moneyflow-runtime';           // font e icone da CDN
const SHELL = [
  './', 'index.html', 'style.css', 'script.js', 'manifest.webmanifest',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-maskable-512.png',
  'icons/apple-touch-icon.png', 'icons/favicon-48.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION && k !== RUNTIME).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// stale-while-revalidate: risponde subito dalla cache e aggiorna in background
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || !/^https?:/.test(req.url)) return;
  const sameOrigin = new URL(req.url).origin === self.location.origin;
  const cacheName = sameOrigin ? VERSION : RUNTIME;
  e.respondWith((async () => {
    const cache = await caches.open(cacheName);
    const cached = await cache.match(req, { ignoreSearch: sameOrigin });
    const network = fetch(req).then(res => {
      if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone());
      return res;
    }).catch(() => null);
    if (cached) { e.waitUntil(network); return cached; }
    const res = await network;
    if (res) return res;
    if (req.mode === 'navigate') return (await caches.match('index.html')) || Response.error();
    return Response.error();
  })());
});
