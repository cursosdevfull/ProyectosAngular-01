import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  constructor(private router: Router) {
    console.log('AuthService creado');
  }

  login() {
    this.router.navigate(['/receta']);
  }

  logout() {
    this.router.navigate(['/']);
  }
}
