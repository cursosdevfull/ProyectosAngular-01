import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EdicionRecetaComponent } from '../edicion-receta/edicion-receta.component';
import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';

@Component({
  selector: 'app-listado-receta',
  templateUrl: './listado-receta.component.html',
  styleUrls: ['./listado-receta.component.css']
})
export class ListadoRecetaComponent implements OnInit {
  recetas: Array<{ titulo: string; descripcion: string; imagen: string }> = [
    {
      titulo: 'Arroz con pollo',
      descripcion: 'arroz que va con pollo',
      imagen: 'arrozconpollo.jpg'
    },
    {
      titulo: 'Lomo saltado',
      descripcion: 'Plato emblemático del Perú',
      imagen: 'arrozconpollo.jpg'
    },
    {
      titulo: 'Sancochado',
      descripcion: 'Un plato originado en los esclavos',
      imagen: 'arrozconpollo.jpg'
    }
  ];
  columnasAMostrar = ['titulo', 'descripcion', 'acciones'];

  constructor(private readonly dialog: MatDialog) {}

  ngOnInit(): void {}

  showModal(data = { modo: 'insert' }) {
    const referencia: MatDialogRef<EdicionRecetaComponent> = this.dialog.open(
      EdicionRecetaComponent,
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
