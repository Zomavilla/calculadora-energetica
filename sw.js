/* Caché independiente para cada ubicación donde se publique la app. */
const PREFIJO = "eficiencia:" + self.registration.scope + ":";
const CACHE = PREFIJO + "v1.60";
const ARCHIVOS = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./icon-maskable-512.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ARCHIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) =>
    Promise.all(ks.filter((k) => k.startsWith(PREFIJO) && k !== CACHE).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  const url = new URL(req.url);
  if (req.method !== "GET" || url.origin !== self.location.origin || !req.url.startsWith(self.registration.scope)) { return; }
  // La app conserva su propia tabla validada. La consulta debe llegar a la red.
  if (url.pathname.endsWith("/tarifas-cfe.json")) { return; }
  if (req.mode === "navigate") {
    const red = fetch(req);
    e.waitUntil(red.then((r) => {
      if (r.ok) {
        const copia = r.clone();
        return caches.open(CACHE).then((c) => c.put(req, copia));
      }
    }).catch(() => {}));
    const paginaGuardada = () => caches.open(CACHE).then(async (c) =>
      (await c.match(req)) || c.match("./index.html"));
    e.respondWith(red.then(async (r) => r.status >= 500 ? (await paginaGuardada()) || r : r,
      async () => (await paginaGuardada()) || Response.error()));
    return;
  }
  e.respondWith(caches.open(CACHE).then(async (c) => (await c.match(req)) || fetch(req)));
});
