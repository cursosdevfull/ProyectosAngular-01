import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route, Routes } from '@angular/router';
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

// const rutas: Route[];
const rutas: Routes = [
  { path: '', component: LoginComponent },
  { path: 'receta', component: RecetaListadoComponent },
  { path: 'ingrediente', component: IngredienteListadoComponent },
  { path: '**', redirectTo: '' },
  /*  { path: '**', component: LoginComponent }, */
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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rutas),
  ],
  providers: [ParticipanteService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
