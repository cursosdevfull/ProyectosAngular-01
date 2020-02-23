import { Component, OnDestroy } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Subscription } from 'rxjs';
import { NotificacionesService } from './services/notificaciones.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  fecha = new Date();
  userLogged = false;
  suscripcion: Subscription;

  constructor(
    private readonly authService: AuthService,
    private notificacionesService: NotificacionesService
  ) {
    /* this.userLogged = this.authService.isUserLogged(); */
    this.suscripcion = this.authService.onChangeStatusUser.subscribe(status => {
      this.userLogged = status;
    });
    this.notificacionesService.inicio();
  }

  ngOnDestroy() {
    this.suscripcion.unsubscribe();
  }
}
