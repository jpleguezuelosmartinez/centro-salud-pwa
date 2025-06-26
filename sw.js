self.addEventListener("install", function (e) {
  console.log("Service Worker instalado");
  self.skipWaiting();
});

self.addEventListener("activate", function (e) {
  console.log("Service Worker activado");
});

self.addEventListener("fetch", function (e) {
  e.respondWith(fetch(e.request));
});