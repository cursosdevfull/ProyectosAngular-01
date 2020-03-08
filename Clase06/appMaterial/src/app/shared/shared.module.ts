import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../material/material.module';
import { ConfirmComponent } from './components/confirm/confirm.component';

@NgModule({
  declarations: [HeaderComponent, ConfirmComponent],
  imports: [CommonModule, MaterialModule],
  exports: [HeaderComponent, ConfirmComponent]
})
export class SharedModule {}
