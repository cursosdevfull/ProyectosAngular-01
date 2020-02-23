'use strict';

self.addEventListener('push', evt => {
  const body = evt.data.text();
  console.log(body);

  const titulo = 'Notificaciones Push';
  const opciones = {
    body: 'cualquier cosa',
  };

  evt.waitUntil(self.registration.showNotification(titulo, opciones));
});
