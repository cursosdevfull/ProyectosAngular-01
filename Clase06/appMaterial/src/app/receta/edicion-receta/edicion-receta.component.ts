import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edicion-receta',
  templateUrl: './edicion-receta.component.html',
  styleUrls: ['./edicion-receta.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EdicionRecetaComponent implements OnInit {
  group: FormGroup;
  titulo: string;

  // datos = {modo:'', info: {}}

  constructor(
    @Inject(MAT_DIALOG_DATA) private datos,
    private readonly referencia: MatDialogRef<EdicionRecetaComponent>
  ) {
    this.titulo = datos.modo == 'insert' ? 'Nuevo' : 'Editar';
    this.group = new FormGroup({
      titulo: new FormControl(datos.info?.titulo, Validators.required),
      descripcion: new FormControl(datos.info?.descripcion, Validators.required)
    });
  }

  ngOnInit(): void {}

  save() {
    this.referencia.close({ modo: this.datos.modo, data: this.group.value });
  }
}
