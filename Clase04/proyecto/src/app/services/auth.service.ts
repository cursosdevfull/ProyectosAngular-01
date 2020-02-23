import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../models/user';
import { Observable, Subject } from 'rxjs';
import { pluck } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';

@Injectable()
export class AuthService {
  private userLogged = false;

  onChangeStatusUser = new Subject<boolean>();

  constructor(private router: Router, private readonly http: HttpClient) {
    console.log('AuthService creado');
  }

  login(user: User) {
    this.http
      .post(`${environment.urlApiRest}/usuario/login`, user)
      .pipe(pluck('result'))
      .subscribe((data: any) => {
        sessionStorage.setItem('token', data.token);
        this.userLogged = true;
        this.onChangeStatusUser.next(true);
        this.router.navigate(['/receta']);
      });
  }

  logout() {
    this.onChangeStatusUser.next(false);
    this.router.navigate(['/']);
    sessionStorage.clear();
  }

  register(user: User): Observable<any> {
    return this.http.post(environment.urlApiRest + '/usuario', user);
  }

  isUserLogged(): boolean {
    const token = sessionStorage.getItem('token');

    return token !== null || this.userLogged;
  }

  getFieldUser(field: string) {
    return sessionStorage.getItem(field);
  }

  getRolesUser(): Array<string> {
    const roles = jwt_decode(this.getFieldUser('token')).roles;
    return roles;
  }
}
