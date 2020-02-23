import { Component, OnDestroy } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  fecha = new Date();
  userLogged = false;
  suscripcion: Subscription;

  constructor(private readonly authService: AuthService) {
    /* this.userLogged = this.authService.isUserLogged(); */
    this.suscripcion = this.authService.onChangeStatusUser.subscribe(status => {
      this.userLogged = status;
    });
  }

  ngOnDestroy() {
    this.suscripcion.unsubscribe();
  }
}
