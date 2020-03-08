import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EdicionRecetaComponent } from 'src/app/receta/edicion-receta/edicion-receta.component';
import { VideoService } from '../../services/video.service';
import { HttpEventType } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edicion-video',
  templateUrl: './edicion-video.component.html',
  styleUrls: ['./edicion-video.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EdicionVideoComponent implements OnInit {
  group: FormGroup;
  videoASubir;
  titulo: string;
  avance = 0;

  constructor(
    @Inject(MAT_DIALOG_DATA) private datos,
    private readonly referencia: MatDialogRef<EdicionVideoComponent>,
    private videoService: VideoService,
    private readonly notificador: MatSnackBar
  ) {
    this.titulo = datos.modo == 'insert' ? 'Nuevo' : 'Editar';
    this.group = new FormGroup({
      titulo: new FormControl(datos.info?.titulo, Validators.required),
      descripcion: new FormControl(datos.info?.descripcion, Validators.required)
    });
  }

  archivoSeleccionado(evt) {
    this.videoASubir = evt.target.files[0];
  }

  upload() {
    const fd = new FormData();
    fd.append('titulo', 'Cineplanet spot');
    fd.append('descripcion', 'De uso privado');
    fd.append('video', this.videoASubir);

    this.videoService.insert(fd).subscribe(evt => {
      if (evt.type === HttpEventType.UploadProgress) {
        const avance = Math.round((evt.loaded / evt.total) * 100);
        this.avance = avance;
      } else if (evt.type === HttpEventType.Response) {
        this.notificador.open('Video subido', null, {
          duration: 2000
        });
      }
    });
  }

  ngOnInit(): void {}

  save() {
    this.referencia.close({ modo: this.datos.modo, data: this.group.value });
  }
}
