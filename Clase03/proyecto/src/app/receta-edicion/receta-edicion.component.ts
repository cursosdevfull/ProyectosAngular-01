import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { RecetaService } from '../services/receta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receta-edicion',
  templateUrl: './receta-edicion.component.html',
  styleUrls: ['./receta-edicion.component.css'],
})
export class RecetaEdicionComponent implements OnInit {
  grupo: FormGroup;

  constructor(
    private readonly recetaService: RecetaService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.grupo = new FormGroup({
      titulo: new FormControl(null, Validators.required),
      descripcion: new FormControl(null),
      foto: new FormControl(null),
    });
  }

  changeFile(evt) {
    const foto = evt.target.files[0];
    this.grupo.patchValue({ foto });
  }

  agregarReceta() {
    const fd = new FormData();

    fd.append('titulo', this.grupo.value.titulo);
    fd.append('descripcion', this.grupo.value.descripcion);

    if (this.grupo.value.foto) {
      fd.append('foto', this.grupo.value.foto);
    }

    this.recetaService.insert(fd).subscribe(data => {
      this.router.navigate(['/receta']);
    });
  }
}
