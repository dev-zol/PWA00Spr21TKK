const PRECACHE = 'precache-v1';
const RUNTIME = 'runtime';

// a list of local resources we always want to be cached
const PRECACHED_URLS = [
    'index.html',
    './',
    'css/style.css',
    'js/main.js',
    'sw.js'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(PRECACHE).then(function(cache) {
            return cache.addAll(PRECACHED_URLS);
        })
    );
});

self.addEventListener('activate', event => {
    console.log('Service Worker Activating');
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});