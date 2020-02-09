import { Component, OnInit } from '@angular/core';
import { Participante } from '../models/participante';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  FormArray,
} from '@angular/forms';
import { ParticipanteService } from '../services/participante.service';
import { ValidatorsFields } from '../validadores/validators-fields';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  titulo = 'Registro';

  participante: Participante = { nombre: '', correo: '', contrasena: '' };

  grupo: FormGroup;

  validatorsFields: ValidatorsFields = new ValidatorsFields();

  dominiosCorreosGratuitos = [
    'gmail.com',
    'outlook.com',
    'hotmail.com',
    'yahoo.com',
  ];

  intereses = [
    'Tecnología',
    'Lectura',
    'Filantropía',
    'Voluntariado',
    'Música',
  ];

  sexos = ['Hombre', 'Mujer'];

  constructor(private readonly participanteService: ParticipanteService) {}

  ngOnInit() {
    this.grupo = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      correo: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ),
        this.validatorsFields.validadorEnArregloCorreos(
          this.dominiosCorreosGratuitos
        ),
      ]),
      contrasena: new FormControl(null, Validators.required),
      confirmacion: new FormControl(null, [
        Validators.required,
        this.validatorsFields.validadorIgualdadCampos(
          'contrasena',
          'confirmacion',
          'confirmacionNoCoincide'
        ),
      ]),
      pasatiempos: new FormArray([]),
      intereses: new FormArray(
        this.intereses.map(interes => new FormControl(null)),
        this.validatorsFields.validadorMinimoChecks('intereses', 2)
      ),
      terminos: new FormControl(null, Validators.requiredTrue),
      sexo: new FormControl(null, Validators.required),
      identificacion: new FormGroup({
        dni: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[0-9]{8,8}$/),
        ]),
      }),
    });
  }

  agregarPasatiempo() {
    const fa: FormArray = this.grupo.get('pasatiempos') as FormArray;
    const fc: FormControl = new FormControl(null, Validators.required);

    fa.push(fc);
  }

  eliminarPasatiempo(indice: number) {
    const fa: FormArray = this.grupo.get('pasatiempos') as FormArray;
    fa.removeAt(indice);
  }

  /*  validarConfirmacion(ctrl: AbstractControl): { [s: string]: boolean } {
    if (!ctrl || !ctrl.parent) {
      return null;
    }

    const contrasena = ctrl.parent.get('contrasena');
    const confirmacion = ctrl.parent.get('confirmacion');

    if (
      !contrasena ||
      !contrasena.value ||
      contrasena.value === '' ||
      !confirmacion ||
      !confirmacion.value ||
      confirmacion.value === ''
    ) {
      return null;
    }

    if (contrasena.value.trim() !== confirmacion.value.trim()) {
      return { confirmacionNoCoincide: true };
    }

    return null;
  } */

  /* validadorCorreoNoGratuito(control: FormControl): { [s: string]: boolean } {
    if (!control || !control.value || control.value === '') {
      return null;
    }

    const partesCorreo = control.value.split('@');

    if (partesCorreo.length < 2) {
      return null;
    }

    if (
      this.dominiosCorreosGratuitos.indexOf(partesCorreo[1].toLowerCase()) > -1
    ) {
      return { correoGratuito: true };
    }

    return null;
  } */

  registroParticipante() {
    this.grupo.get('sexo').markAsTouched();
    this.grupo.get('sexo').updateValueAndValidity();

    // for(let control of this.grupo.controls)

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
