/* Service worker de Proyecto Eficiencia.
   IMPORTANTE: cambia VERSION en cada entrega para que las apps instaladas se actualicen. */
const VERSION = "2026.11.26-11";
const CACHE = "eficiencia-" + VERSION;
const ARCHIVOS = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => Promise.all(ARCHIVOS.map((u) => c.add(u).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((claves) => Promise.all(claves.filter((k) => k.startsWith("eficiencia-") && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) { return; }
  const esPagina = req.mode === "navigate" || req.destination === "document";
  const esTabla = req.url.includes("tarifas-cfe.json");
  if (esPagina || esTabla) {
    // Red primero (siempre lo más nuevo); sin conexión, la copia guardada
    e.respondWith(
      fetch(req).then((r) => { const copia = r.clone(); caches.open(CACHE).then((c) => c.put(req, copia)); return r; })
        .catch(() => caches.match(req).then((r) => r || caches.match("./index.html")))
    );
  } else {
    e.respondWith(
      caches.match(req).then((r) => r || fetch(req).then((n) => { const copia = n.clone(); caches.open(CACHE).then((c) => c.put(req, copia)); return n; }))
    );
  }
});
