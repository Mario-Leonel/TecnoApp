/*const PRECACHE = "precache-v1";
const RUNTIME = "runtime";

const PRECACHE_URLS = [
  "/",
  "index.php",
  "css/bootstrap.min.css",
  "css/flexslider.css",
  "css/styles.css",
  "js/jquery-3.4.1.min.js",
  "js/popper.min.js",
  "js/bootstrap.min.js",
  "js/jquery.flexslider.js",
  "js/jquery.menu.js",
  "manifest.json",
  "img/favicon.ico",
  "img/1.png",
  "img/2.png",
  "img/3.png",
  "img/4.png",
  "img/5.png",
  "img/6.png",
  "img/7.png",
  "img/9.png",
  "img/bd.png",
  "img/desarrolloweb1.png",
  "img/escritorio.png",
  "img/moviles.png",
  "img/soporte.png",
  "img/webconsultoria.png",
  "img/webDesarrollo_desktop.png",
  "img/webecommerce.png",
  "img/CasExito/EperfilesAjoloapan.png",
  "img/CasExito/glifo.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches
      .open(PRECACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  const currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(
    caches
      .keys()
      .then(cacheNames => {
        return cacheNames.filter(
          cacheName => !currentCaches.includes(cacheName)
        );
      })
      .then(cachesToDelete => {
        return Promise.all(
          cachesToDelete.map(cacheToDelete => {
            return caches.dlete(cacheToDelete);
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return caches.open(RUNTIME).then(cache => {
          return fetch(event.request).then(response => {
            return cache.put(event.request, response.clone()).then(() => {
              return response;
            });
          });
        });
      })
    );
  }
});*/

var PRECACHE = "precache-v2";
var RUNTIME = "runtime";

// list the files you want cached by the service worker
PRECACHE_URLS = [
  "offline.html"
  /*"css/bootstrap.min.css",
  "css/flexslider.css",
  "css/styles.css",
  "js/jquery-3.4.1.min.js",
  "js/popper.min.js",
  "js/bootstrap.min.js",
  "js/jquery.flexslider.js",
  "js/jquery.menu.js",
  "img/1.png",
  "img/2.png",
  "img/3.png",
  "img/4.png",
  "img/5.png",
  "img/6.png",
  "img/7.png",
  "img/9.png",
  "img/bd.png",
  "img/desarrolloweb1.png",
  "img/escritorio.png",
  "img/moviles.png",
  "img/soporte.png",
  "img/webconsultoria.png",
  "img/webDesarrollo_desktop.png",
  "img/webecommerce.png",
  "img/CasExito/EperfilesAjoloapan.png",
  "img/CasExito/glifo.png"*/
];

// the rest below handles the installing and caching
self.addEventListener("install", event => {
  event.waitUntil(
    caches
      .open(PRECACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  const currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(
    caches
      .keys()
      .then(cacheNames => {
        return cacheNames.filter(
          cacheName => !currentCaches.includes(cacheName)
        );
      })
      .then(cachesToDelete => {
        return Promise.all(
          cachesToDelete.map(cacheToDelete => {
            return caches.delete(cacheToDelete);
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return caches.open(RUNTIME).then(cache => {
          return fetch(event.request).then(response => {
            // Put a copy of the response in the runtime cache.
            return cache.put(event.request, response.clone()).then(() => {
              return response;
            });
          });
        });
      })
    );
  }
});
