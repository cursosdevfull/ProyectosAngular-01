import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecetaRoutingModule } from './receta-routing.module';
import { ListadoRecetaComponent } from './listado-receta/listado-receta.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [ListadoRecetaComponent],
  imports: [CommonModule, RecetaRoutingModule, MaterialModule]
})
export class RecetaModule {}
