'use strict';

self.addEventListener('push', evt => {
  const body = JSON.parse(evt.data.text());
  console.log(body);

  const titulo = body.notification.title;
  const opciones = {
    body: body.notification.body,
    requireInteraction: true,
    tag: 'require-interaction',
  };

  evt.waitUntil(self.registration.showNotification(titulo, opciones));
});
