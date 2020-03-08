import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'receta',
    loadChildren: () =>
      import('./receta/receta.module').then(mod => mod.RecetaModule)
  },
  {
    path: 'video',
    loadChildren: () =>
      import('./video/video.module').then(mod => mod.VideoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
