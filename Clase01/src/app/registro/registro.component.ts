import { Component, OnInit } from '@angular/core';
import { Participante } from '../models/participante';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ParticipanteService } from '../services/participante.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  titulo = 'Registro';

  participante: Participante = { nombre: '', correo: '', contrasena: '' };

  grupo: FormGroup;

  /* private participanteService;

  constructor(participanteService: ParticipanteService) {
    this.participanteService = participanteService;
  } */

  constructor(private readonly participanteService: ParticipanteService) {}

  ngOnInit() {
    this.grupo = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      correo: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ),
      ]),
      contrasena: new FormControl(null, Validators.required),
    });
  }

  conversion(obj) {
    return JSON.stringify(obj);
  }

  registroParticipante() {
    if (this.grupo.valid) {
      const participante: Participante = this.grupo.value;

      console.log('El formulario es válido');
      console.log(this.grupo.value);
      console.log(this.grupo.getRawValue());
    } else {
      console.log('El formulario es inválido');
    }
  }
}
