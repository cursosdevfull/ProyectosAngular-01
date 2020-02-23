import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor(private readonly authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.authService.getFieldUser('token');

    let clone;

    if (token !== null) {
      clone = req.clone({
        headers: req.headers.append('authorization', 'Bearer ' + token),
      });
    } else {
      clone = req;
    }

    return next.handle(clone);
  }
}
