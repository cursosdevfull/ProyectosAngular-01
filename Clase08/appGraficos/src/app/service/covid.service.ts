import { Injectable } from '@angular/core';
import { Covid } from '../models/covid';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CovidService {
  constructor(private readonly http: HttpClient) {}

  getAll(): Observable<Covid[]> {
    return this.http
      .get<Covid[]>('https://covid19.mathdro.id/api/confirmed')
      .pipe(map(data => data.slice(0, 20)));
  }
}
