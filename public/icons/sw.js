// sw.js - Service Worker

// Cache the assets during the service worker installation
self.addEventListener('install', (event) => {
    console.log('Service Worker installed');
    event.waitUntil(
        caches.open('fly-high-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/logo.png',  // Update with your assets
                '/manifest.json',  // Add other important assets
                '/assets/*',  // Include other assets like CSS, JS, etc.
            ]);
        })
    );
});

// Serve files from cache if offline or cached
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request);
        })
    );
});

// Activate the service worker
self.addEventListener('activate', (event) => {
    console.log('Service Worker activated');
});
