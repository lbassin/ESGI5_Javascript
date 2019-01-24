self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('v1').then(function(cache) {
            return cache.addAll([
                '/index.html',
                '/config.js',
                '/main.js',
                '/style.css',
                '/sw.js',
                '/core/index.js',
                '/core/NotFoundComponent.js',
                '/core/RouterComponent.js',
                '/core/TemplateComponent.js',
                '/core/Utils/http.js',
                '/core/Utils/interpolate.js',
                '/core/Utils/prop_access.js',
                '/core/Utils/router.js',
                '/core/Utils/type_check.js',
                '/src/components/NavbarComponent.js',
                '/src/components/CardComponent.js',
                '/src/images/cat.jpg',
                '/src/images/roller_dog.jpg',
                '/src/pages/AboutComponent.js',
                '/src/pages/CameraComponent.js',
                '/src/pages/DayComponent.js',
                '/src/pages/FileReaderComponent.js',
                '/src/pages/HomeComponent.js',
                '/src/pages/SwComponent.js'
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