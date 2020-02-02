import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';

@NgModule({
  declarations: [AppComponent, RegistroComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [RegistroComponent],
})
export class AppModule {}
