import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { RecetaService } from '../services/receta.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Receta } from '../models/receta';

@Component({
  selector: 'app-receta-edicion',
  templateUrl: './receta-edicion.component.html',
  styleUrls: ['./receta-edicion.component.css'],
})
export class RecetaEdicionComponent implements OnInit {
  grupo: FormGroup;
  titulo: string;

  constructor(
    private readonly recetaService: RecetaService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    let dataReceta;

    if (id) {
      this.titulo = 'Edición receta';
      dataReceta = this.activatedRoute.snapshot.data.dataReceta;
      /* this.recetaService.getById(id).subscribe((data: Receta) => {
        this.grupo.patchValue(data);
      }); */
    } else {
      this.titulo = 'Nueva receta';
      dataReceta = {};
    }

    this.grupo = new FormGroup({
      titulo: new FormControl(dataReceta.titulo, Validators.required),
      descripcion: new FormControl(dataReceta.descripcion),
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
