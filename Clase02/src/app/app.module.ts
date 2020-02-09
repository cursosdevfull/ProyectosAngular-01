import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ParticipanteService } from './services/participante.service';

@NgModule({
  declarations: [AppComponent, RegistroComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [ParticipanteService],
  bootstrap: [RegistroComponent],
})
export class AppModule {}
