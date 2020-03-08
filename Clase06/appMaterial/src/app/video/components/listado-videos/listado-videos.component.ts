import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EdicionRecetaComponent } from 'src/app/receta/edicion-receta/edicion-receta.component';
import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';
import { EdicionVideoComponent } from '../edicion-video/edicion-video.component';
import { VideoService } from '../../services/video.service';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-listado-videos',
  templateUrl: './listado-videos.component.html',
  styleUrls: ['./listado-videos.component.css']
})
export class ListadoVideosComponent implements OnInit {
  videos: Array<{ titulo: string; descripcion: string }> = [
    {
      titulo: 'Ready Player One',
      descripcion: 'Basado en un juego'
    },
    {
      titulo: 'El Gladiator',
      descripcion: 'Basado en un invención con hechos y personajes reales'
    }
  ];
  columnasAMostrar = ['titulo', 'descripcion'];

  constructor(
    private readonly dialog: MatDialog,
    private readonly videoService: VideoService
  ) {}

  ngOnInit(): void {}

  showModal(data = { modo: 'insert' }) {
    const referencia: MatDialogRef<EdicionVideoComponent> = this.dialog.open(
      EdicionVideoComponent,
      {
        panelClass: 'contenedorModal',
        disableClose: true,
        data
        /* width: '500px' */
      }
    );

    referencia.afterClosed().subscribe(respuesta => {
      if (!respuesta) {
        return false;
      }

      if (respuesta.modo === 'insert') {
        console.log('Insert', respuesta.data);
      } else {
        console.log('Edit', respuesta.data);
      }
    });
  }

  confirm(indice: number) {
    const ref: MatDialogRef<ConfirmComponent> = this.dialog.open(
      ConfirmComponent,
      {
        disableClose: true
      }
    );

    ref.componentInstance.mensaje = '¿Está seguro de querer eliminar?';

    ref.afterClosed().subscribe(respuesta => {
      if (respuesta) {
        console.log('Elemento eliminado');
      } else {
        console.log('No se eliminó');
      }
    });
  }


}
