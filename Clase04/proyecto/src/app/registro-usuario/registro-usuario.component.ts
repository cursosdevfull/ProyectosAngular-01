import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css'],
})
export class RegistroUsuarioComponent implements OnInit {
  grupo: FormGroup;
  mensajeError = '';

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {
    this.grupo = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      correo: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ),
      ]),
      contrasena: new FormControl(null, Validators.required),
    });
  }

  register() {
    const user: User = this.grupo.getRawValue();
    this.authService.register(user).subscribe(
      () => this.router.navigate(['/login']),
      () => (this.mensajeError = 'El correo está duplicado. Intente con otro')
    );
  }

  irALogin() {
    this.router.navigate(['/login']);
  }

  ngOnInit() {}
}
