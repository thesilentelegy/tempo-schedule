var CACHE_NAME = 'tempo-ch-v1'
var urlsToCache = [
	'/',
	'/index.html',
	'/scripts/app.js',
	'/scripts/sw-reg.js',
	'/scripts/vue.min.js',
	'/styles/base.css',
	'/styles/typo.css',
	'/styles/app.css',
	'/assets/lineto-circular-book.ttf',
	'/assets/lineto-circular-medium.ttf',
	'/assets/lineto-circular-bold.ttf',
	'/icons/favicon.ico',
	'/icons/apple-touch-icon.png',
	'/icons/ms-icon-144x144.png',
	'/icons/icon-1x.png',
	'/icons/icon-2x.png',
	'/icons/icon-4x.png'
];

self.addEventListener('install', function(event) {
	console.log('[SERVICE WORKER] Installing...');
	event.waitUntil(
		caches.open(CACHE_NAME).then(function(cache) {
			return cache.addAll(urlsToCache);
		}).then(function() {
			console.log('[SERVICE WORKER] Installation completed.');
		})
	);
});

self.addEventListener('fetch', function(event) {
	console.log('[SERVICE WORKER] Fetch event in progress...');
	event.respondWith(
		caches.match(event.request).then(function(response) {
			if (response) {
				return response;
			}

			var fetchRequest = event.request.clone();

			return fetch(fetchRequest).then(
				function(response) {
					if (!response || response.status !== 200 || response.type !== 'basic') {
						return response;
					}

					var responseToCache = response.clone();

					caches.open(CACHE_NAME).then(function(cache) {
						cache.put(event.request, responseToCache);
					});

					return response;
				}
			);
		}).catch(function() {
			console.log('[SERVICE WORKER] Unable to fetch resources');
		})
	);
});

self.addEventListener('activate', function(event) {
  console.log('[SERVICE WORKER] Activating...');
  var cacheWhitelist = ['tempo-ch-v1'];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(function() {
    	console.log('[SERVICE WORKER] Activation completed.');
    })
  );
});