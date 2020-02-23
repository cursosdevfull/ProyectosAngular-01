import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AutorizadoGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const rolesPermitidos = next.data.rolesPermitidos;
    const rolesUsuario = this.authService.getRolesUser();

    let autorizado = false;

    for (const rol of rolesUsuario) {
      if (rolesPermitidos.index(rol) > -1) {
        autorizado = true;
      }
    }

    return autorizado;
  }
}
