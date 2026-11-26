// Service worker: guarda la app para usarla sin conexión.
// Al cambiar index.html, sube el número de versión para que los teléfonos descarguen la nueva.
var PREFIJO_CACHE = "eficiencia:" + self.registration.scope + ":";
var CACHE = PREFIJO_CACHE + "v12";
var ARCHIVOS = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./icon-maskable-512.png"];

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(ARCHIVOS); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k.startsWith(PREFIJO_CACHE) && k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") { return; }
  if (e.request.url === new URL("tarifas-cfe.json", self.registration.scope).href) { return; }
  if (e.request.mode === "navigate") {   // la página: primero la red (para tener la última versión) y, sin conexión, la copia guardada
    var red = fetch(e.request);
    e.waitUntil(red.then(function (r) {
      if (r.ok) {
        var copia = r.clone();
        return caches.open(CACHE).then(function (c) { return c.put("./index.html", copia); });
      }
    }).catch(function () {}));
    e.respondWith(red.catch(function () { return caches.open(CACHE).then(function (c) { return c.match("./index.html"); }); }));
    return;
  }
  e.respondWith(caches.open(CACHE).then(function (c) { return c.match(e.request); }).then(function (r) { return r || fetch(e.request); }));
});
