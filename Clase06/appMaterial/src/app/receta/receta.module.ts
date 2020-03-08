import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecetaRoutingModule } from './receta-routing.module';
import { ListadoRecetaComponent } from './listado-receta/listado-receta.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { EdicionRecetaComponent } from './edicion-receta/edicion-receta.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListadoRecetaComponent, EdicionRecetaComponent],
  imports: [
    CommonModule,
    RecetaRoutingModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class RecetaModule {}
