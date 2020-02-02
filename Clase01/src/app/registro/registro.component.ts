import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  titulo = 'Registro';
  nombre = 'Sergio';
  correo = 'sergiohidalgocaceres@gmail.com';

  constructor() {
    setTimeout(() => {
      this.titulo = 'Registro de Participante';
    }, 3000);
  }

  tipeo(evt) {
    this.correo = evt.target.value;
    /* console.log(evt.target.value); */
  }

  ngOnInit() {}
}
