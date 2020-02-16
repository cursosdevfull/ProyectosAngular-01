import {
  FormControl,
  AbstractControl,
  ValidatorFn,
  FormArray,
} from '@angular/forms';
export class ValidatorsFields {
  validadorEnArregloCorreos(arr: string[]) {
    return (control: FormControl): { [s: string]: boolean } => {
      if (!control || !control.value || control.value === '') {
        return null;
      }

      const partesCorreo = control.value.split('@');

      if (partesCorreo.length < 2) {
        return null;
      }

      if (arr.indexOf(partesCorreo[1].toLowerCase()) > -1) {
        return { correoGratuito: true };
      }

      return null;
    };
  }

  validadorIgualdadCampos(
    campo1: string,
    campo2: string,
    propiedadError: string
  ) {
    return (ctrl: AbstractControl): { [s: string]: boolean } => {
      if (!ctrl || !ctrl.parent) {
        return null;
      }

      const field1 = ctrl.parent.get(campo1);
      const field2 = ctrl.parent.get(campo2);

      if (
        !field1 ||
        !field1.value ||
        field1.value === '' ||
        !field2 ||
        !field2.value ||
        field2.value === ''
      ) {
        return null;
      }

      if (field1.value.trim() !== field2.value.trim()) {
        const error = {};
        error[propiedadError] = true;
        return error;
      }

      return null;
    };
  }

  validadorMinimoChecks(
    formArrayName: string,
    minimoChecks: number
  ): ValidatorFn {
    return (ctrl: AbstractControl) => {
      if (!ctrl || !ctrl.parent) {
        return null;
      }

      const fa = ctrl.parent.get(formArrayName) as FormArray;

      if (!fa || !fa.controls) {
        return null;
      }

      let checksSeleccionados = 0;

      for (const control of fa.controls) {
        if (control.value) {
          checksSeleccionados++;
        }
      }

      if (checksSeleccionados < minimoChecks) {
        return { minimoChecks: true };
      }

      return null;
    };
  }
}
