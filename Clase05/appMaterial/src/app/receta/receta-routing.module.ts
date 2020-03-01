import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoRecetaComponent } from './listado-receta/listado-receta.component';

const routes: Routes = [{ path: '', component: ListadoRecetaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecetaRoutingModule {}
