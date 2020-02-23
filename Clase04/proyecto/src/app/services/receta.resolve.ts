import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Receta } from '../models/receta';
import { RecetaService } from './receta.service';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecetaResolve implements Resolve<Receta> {
  constructor(private readonly recetaService: RecetaService) {}

  resolve(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Receta> {
    const id = next.params.id;

    return this.recetaService.getById(id).pipe(delay(3000));
  }
}
