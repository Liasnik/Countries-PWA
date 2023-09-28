// @ts-ignore
importScripts('https://cdnjs.cloudflare.com/ajax/libs/sw-toolbox/3.6.1/sw-toolbox.js');

self.toolbox.options.debug = false;
self.toolbox.options.networkTimeoutSeconds = 15;

// Устанавливаем тип MIME для сервис-воркера
self.toolbox.router.get(/service-worker.js/, self.toolbox.cacheFirst, {
  // Устанавливаем правильный тип MIME для JavaScript
  cache: {
    name: 'js-cache',
    maxEntries: 10,
    maxAgeSeconds: 3600,
    map: {
      'js': 'application/javascript' // Указываем тип MIME для .js файлов
    }
  }
});

// service-worker.js
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('my-cache-name').then((cache) => {
      return cache.addAll([
        '/', // Главная страница
        '/index.html', // HTML-файл
        '/manifest.json', // Манифест
        '/static/js/bundle.js', // Ваши JS файлы
        '/static/css/main.css', // Ваши CSS файлы
        // Добавьте другие ресурсы, которые хотите закэшировать
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});