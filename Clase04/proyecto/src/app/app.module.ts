import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route, Routes, CanActivate } from '@angular/router';
import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ParticipanteService } from './services/participante.service';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { RecetaListadoComponent } from './receta-listado/receta-listado.component';
import { RecetaEdicionComponent } from './receta-edicion/receta-edicion.component';
import { IngredienteListadoComponent } from './ingrediente-listado/ingrediente-listado.component';
import { IngredienteEdicionComponent } from './ingrediente-edicion/ingrediente-edicion.component';
import { AuthService } from './services/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppInterceptor } from './services/app.interceptor';
import { PermisosDirective } from './permisos.directive';
import { UsuarioListadoComponent } from './usuario-listado/usuario-listado.component';
import { AutenticadoGuard } from './services/autenticado.guard';
import { AutorizadoGuard } from './services/autorizado.guard';
import { RecetaResolve } from './services/receta.resolve';

// const rutas: Route[];
const rutas: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'receta',
    children: [
      { path: '', component: RecetaListadoComponent },
      { path: 'nueva', component: RecetaEdicionComponent },
      {
        path: 'edicion/:id',
        component: RecetaEdicionComponent,
        resolve: {
          dataReceta: RecetaResolve,
        },
      },
    ],
  },
  { path: 'ingrediente', component: IngredienteListadoComponent },
  { path: 'registro', component: RegistroUsuarioComponent },
  {
    path: 'usuario',
    component: UsuarioListadoComponent,
    canActivate: [AutenticadoGuard, AutorizadoGuard],
    data: { rolesPermitidos: ['auditor'] },
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    HeaderComponent,
    LoginComponent,
    RegistroUsuarioComponent,
    RecetaListadoComponent,
    RecetaEdicionComponent,
    IngredienteListadoComponent,
    IngredienteEdicionComponent,
    PermisosDirective,
    UsuarioListadoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rutas),
    HttpClientModule,
  ],
  providers: [
    ParticipanteService,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
