import { Component, OnInit } from '@angular/core';
import { RecetaService } from '../services/receta.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Receta } from '../models/receta';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-receta-listado',
  templateUrl: './receta-listado.component.html',
  styleUrls: ['./receta-listado.component.css'],
})
export class RecetaListadoComponent implements OnInit {
  listaRecetas: Observable<Receta[]>;

  constructor(
    private readonly recetaService: RecetaService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.listaRecetas = this.recetaService.get();
  }

  agregar() {
    this.router.navigate(['nueva'], { relativeTo: this.activatedRoute });
  }

  obtenerRutaImagen(foto: string): string {
    return environment.urlApiRest + '/files/' + foto;
  }
}
