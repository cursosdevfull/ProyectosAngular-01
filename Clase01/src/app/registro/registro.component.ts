import { Component, OnInit } from '@angular/core';
import { Participante } from '../models/participante';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  titulo = 'Registro';

  participante: Participante = { nombre: '', correo: '', contrasena: '' };

  constructor() {}

  ngOnInit() {}

  conversion(obj) {
    return JSON.stringify(obj);
  }
}
