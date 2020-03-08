import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoRoutingModule } from './video-routing.module';
import { ListadoVideosComponent } from './components/listado-videos/listado-videos.component';
import { EdicionVideoComponent } from './components/edicion-video/edicion-video.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ListadoVideosComponent, EdicionVideoComponent],
  imports: [
    CommonModule,
    VideoRoutingModule,
    MaterialModule,
    SharedModule,
    HttpClientModule
  ]
})
export class VideoModule {}
