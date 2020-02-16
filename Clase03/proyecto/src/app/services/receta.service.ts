import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Receta } from '../models/receta';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RecetaService {
  constructor(
    private readonly http: HttpClient,
    private readonly authService: AuthService
  ) {}

  get(): Observable<Receta[]> {
    // const token = this.authService.getFieldUser('token');
    // const headers = new HttpHeaders({ authorization: `Bearer ${token}` });
    return this.http
      .get(`${environment.urlApiRest}/receta`)
      .pipe(pluck('results'));
  }

  getById(id: string) {}

  insert(fd: FormData): Observable<any> {
    return this.http.post(`${environment.urlApiRest}/receta`, fd);
  }

  update(receta: Receta) {}

  deleteById(id: string) {}
}
