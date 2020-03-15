import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ChatService } from './chat.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userLogged = false;

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router,
    private readonly chatService: ChatService
  ) {}

  login(user: User) {
    this.http
      .post(`${environment.apiUrl}/users/login`, user)
      .subscribe((response: any) => {
        const info: User = {};
        info._id = response._id;
        info.name = response.name;
        info.email = response.email;
        info.photo = response.photo;
        this.userLogged = true;

        this.chatService.connect(info);

        sessionStorage.setItem('user', JSON.stringify(info));
        this.router.navigate(['/dashboard']);
      });
  }

  register(data: FormData) {
    this.http.post(`${environment.apiUrl}/users`, data).subscribe(response => {
      this.router.navigate(['/']);
    });
  }

  logout() {
    this.userLogged = false;
    sessionStorage.clear();
    this.router.navigate(['/']);
  }

  getField(field: string): string {
    const user: User = JSON.parse(sessionStorage.getItem('user'));
    return user[field];
  }

  isUserLogged(): boolean {
    const user: User = JSON.parse(sessionStorage.getItem('user'));

    return this.userLogged || !user;
  }
}
