const CACHE = 'resultados-2026-v3';
const ASSETS = ['./', './index.html', './styles.css', './app.js', './participants.js', './links.js', './manifest.webmanifest', './icon.svg'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
    const copy = response.clone();
    caches.open(CACHE).then(cache => cache.put(event.request, copy));
    return response;
  }).catch(() => caches.match('./index.html'))));
});

self.addEventListener('message', event => {
  if (event.data?.type === 'SHOW_RESULT_NOTIFICATION') {
    self.registration.showNotification(event.data.title || 'Resultado chegando', {
      body: event.data.body || 'Confira o cronograma de resultados.',
      icon: './icon.svg',
      badge: './icon.svg',
      tag: event.data.tag || 'resultado-2026',
      data: { url: './' }
    });
  }
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
    const existing = list.find(client => 'focus' in client);
    return existing ? existing.focus() : clients.openWindow('./');
  }));
});
