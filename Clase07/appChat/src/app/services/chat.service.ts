import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from '../../environments/environment';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket: any;

  constructor() {
    this.socket = io(environment.apiUrl);
  }

  connect(info) {
    this.socket.emit('user connect', info);
  }

  sentMessage(data) {
    console.log(data);
    this.socket.emit('message sent', data);
  }

  listUsersUpdated(): Observable<any> {
    return Observable.create((obs: Observer<any>) => {
      this.socket.on('list users', data => {
        obs.next(data);
      });
    });
  }

  joinRoom(id, id1, id2) {
    console.log(id, id1, id2);
    this.socket.emit('joinRoom', { id, id1, id2 });
  }

  updateMessages(): Observable<any> {
    return Observable.create((obs: Observer<any>) => {
      this.socket.on('update messages', data => {
        obs.next(data);
      });
    });
  }

  logout(id) {
    this.socket.emit('dejarRooms', id);
  }
}
