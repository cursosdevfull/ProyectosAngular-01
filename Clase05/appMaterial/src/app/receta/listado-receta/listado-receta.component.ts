import { Component, OnInit } from '@angular/core';

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
    }
  ];
  columnasAMostrar = ['titulo', 'descripcion'];

  constructor() {}

  ngOnInit(): void {}
}
