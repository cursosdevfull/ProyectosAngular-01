import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket: any;

  constructor() {
    this.socket = io.connect('https://o3zfl.sse.codesandbox.io/');
  }

  listen(eventName: string) {
    return new Observable(observer => {
      this.socket.on(eventName, result => {
        observer.next(result);
      });
    });
  }
}
