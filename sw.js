const CACHE_NAME = 'profcenter-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/images/hero.jpg',
    '/images/excavator.jpg',
    '/images/bulldozer.jpg',
    '/images/crane.jpg',
    '/images/loader.jpg',
    '/images/lab.jpg',
    '/images/worker.jpg'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) return response;
                return fetch(event.request);
            })
    );
});
