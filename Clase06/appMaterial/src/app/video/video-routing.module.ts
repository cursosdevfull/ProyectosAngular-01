import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoVideosComponent } from './components/listado-videos/listado-videos.component';
import { EdicionVideoComponent } from './components/edicion-video/edicion-video.component';

const routes: Routes = [
  { path: '', component: ListadoVideosComponent },
  { path: 'new', component: EdicionVideoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoRoutingModule {}
