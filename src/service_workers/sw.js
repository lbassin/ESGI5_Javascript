self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('v1').then(function(cache) {
            return cache.addAll([
                '/src/images/',
                '/src/images/cat.jpg',
                '/src/images/roller_dog.jpg',
                '/index.html',
                '/config.js',
                '/main.js',
                '/style.css',
                '/src/pages/',
                '/src/pages/SwComponent.css',
                '/src/components/',
                '/src/components/NavbarComponent.js',
                '/src/core/',
                '/src/core/index.js',
                '/src/core/NotFoundComponent.js',
                '/src/core/RouterComponent.js',
                '/src/core/TemplateComponent.js',
                '/src/core/Utils/',
                '/src/core/Utils/http.js',
                '/src/core/Utils/interpolate.js',
                '/src/core/Utils/prop_access.js',
                '/src/core/Utils/router.js',
                '/src/core/Utils/type_check.js'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(caches.match(event.request).then(function(response) {
        if (response !== undefined) {
            return response;
        } else {
            return fetch(event.request).then(function (response) {
                let responseClone = response.clone();

                caches.open('v1').then(function (cache) {
                    cache.put(event.request, responseClone);
                });
                return response;
            }).catch(function () {
                return caches.match('/src/images/roller_dog.jpg');
            });
        }
    }));
});