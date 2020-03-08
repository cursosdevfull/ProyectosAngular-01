import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Video } from '../models/video';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  constructor(private readonly http: HttpClient) {}

  insert(data: FormData): Observable<HttpEvent<any>> {
    const req = new HttpRequest(
      'post',
      'http://clase.tibajodemanda.com/video',
      data,
      { reportProgress: true }
    );

    return this.http.request(req);
  }
}
