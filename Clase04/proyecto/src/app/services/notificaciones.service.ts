import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NotificacionesService {
  /* Public Key:
BJdT_vdKMt3jldMnX2E34U10cwdKGPZlgiRcrC6Bnade5cUin2iMe4d5bzDXQedoUvIRARhvhhUNOiVpZ4eGFGk     

Private Key:
aeqEHgKuxsgLWF5SD9jZaCPVHaQnX9Rp_OimhUcXrKY */

  llavePublica =
    'BJdT_vdKMt3jldMnX2E34U10cwdKGPZlgiRcrC6Bnade5cUin2iMe4d5bzDXQedoUvIRARhvhhUNOiVpZ4eGFGk';

  swRegistro: ServiceWorkerRegistration;

  constructor(private readonly http: HttpClient) {}

  inicio() {
    if (this.soportaNotificacionesPush) {
      this.registrarServiceWorker();
    } else {
      console.log('No soporta notificaciones push');
    }
  }

  private get soportaNotificacionesPush(): boolean {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      return true;
    }

    return false;
  }

  private async registrarServiceWorker() {
    try {
      this.swRegistro = await navigator.serviceWorker.register('/app/sw.js', {
        scope: '/app/',
      });
      this.crearSuscripcion();
    } catch (error) {
      console.log('Ocurrió un error al registrar el service worker', error);
    }
  }

  private async crearSuscripcion() {
    try {
      const suscripcion = await this.swRegistro.pushManager.getSubscription();

      const usuarioEstaSuscrito = suscripcion != null;

      if (usuarioEstaSuscrito) {
        this.enviarSuscripcionAlServidor(suscripcion);
      } else {
        this.suscribirAlUsuario();
      }
    } catch (error) {}
  }

  private enviarSuscripcionAlServidor(suscripcion) {
    this.http.post('http://localhost:3000/suscribe', suscripcion).subscribe();
  }

  private async suscribirAlUsuario() {
    const publicKey = this.convertirUrlBase4AUInt8Array(this.llavePublica);

    try {
      await this.swRegistro.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: publicKey,
      });
      console.log('El usuario está suscrito');
    } catch (error) {
      console.log('Ocurrió un error al momento de suscribir');
    }
  }

  private convertirUrlBase4AUInt8Array(base64Cadena: string): Uint8Array {
    const padding = '='.repeat((4 - (base64Cadena.length % 4)) % 4);
    const base64 = (base64Cadena + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }
}
