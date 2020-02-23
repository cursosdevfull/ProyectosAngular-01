import { AuthService } from './services/auth.service';
import {
  Directive,
  ViewContainerRef,
  TemplateRef,
  OnInit,
  Input,
} from '@angular/core';

@Directive({
  selector: '[permisos]',
})
export class PermisosDirective implements OnInit {
  @Input() permisos = [];

  constructor(
    private readonly viewContainerRef: ViewContainerRef,
    private readonly templateRef: TemplateRef<any>,
    private authService: AuthService
  ) {}

  ngOnInit() {
    const usuarioLogueado = this.authService.isUserLogged();
    const rolesUsuario = this.authService.getRolesUser();
    let usuarioAutorizado = false;

    for (const rol of rolesUsuario) {
      if (this.permisos.indexOf(rol) > -1) {
        usuarioAutorizado = true;
      }
    }
    let tieneContenido = false;

    if (usuarioLogueado && usuarioAutorizado && !tieneContenido) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      tieneContenido = true;
    } else {
      this.viewContainerRef.clear();
      tieneContenido = false;
    }
  }
}
