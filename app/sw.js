const CACHE_NAME = 'rss-poc-v1';
const urlsToCache = [
  '/',
  '/styles/main.css',
  '/styles/fonts/CapitoliumBold.woff2',
  '/styles/fonts/EgyptienneRegular.woff2',
  '/styles/fonts/FlamaBook.woff2',
  '/styles/fonts/FlamaSemibold.woff2',
  '/scripts/main.js',
];

self.addEventListener('install', (event) => {
  // Perform install steps
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => {
    console.log('Opened cache');
    return cache.addAll(urlsToCache);
  }).catch((errorMsg) => {
    console.log('Caching failed', errorMsg);
  }));
});

self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request).then((response) => {
    // Cache hit - return response
    if (response) {
      return response;
    }
    return fetch(event.request);
  }).catch((errorMsg) => {
    console.log('Fetching from cache failed', errorMsg);
  }));
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = ['rss-poc-v1'];
  event.waitUntil(caches.keys().then((cacheNames) => Promise.all(cacheNames.map((cacheName) => (
    cacheWhitelist.indexOf(cacheName) === -1 ? caches.delete(cacheName) : null
  )))));
});
