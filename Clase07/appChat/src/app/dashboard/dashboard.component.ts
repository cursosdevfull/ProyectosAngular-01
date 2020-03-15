import { Component, OnInit } from '@angular/core';
import { Member } from '../models/member';
import { ChatService } from '../services/chat.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tittle = 'Panel';
  selectedUser: Member;

  users: Array<Member> = [];

  /* users: Array<Member> = [
    {
      _id: '1',
      name: 'Pork',
      photo: 'pork.png',
      messages: [
        {
          id1: '2',
          id2: '1',
          text: 'Hello',
          photo: 'duck.png',
          dateTime: '2020-03-15 10:00'
        },
        {
          id1: '1',
          id2: '2',
          text: 'Hi my friend',
          photo: 'pork.png',
          dateTime: '2020-03-15 10:30'
        },
        {
          id1: '2',
          id2: '1',
          text: 'How are u?',
          photo: 'duck.png',
          dateTime: '2020-03-15 10:34'
        },
        {
          id1: '1',
          id2: '2',
          text: 'Fine, thanks',
          photo: 'pork.png',
          dateTime: '2020-03-15 14:10'
        }
      ]
    },
    {
      _id: '2',
      name: 'Duck',
      photo: 'duck.png',
      messages: []
    },
    {
      _id: '3',
      name: 'Bird',
      photo: 'bird.png',
      messages: []
    }
  ]; */
  textInput = '';

  statusPanel = false;

  constructor(
    private readonly chatService: ChatService,
    private readonly userService: UserService
  ) {
    this.chatService.listUsersUpdated().subscribe(data => {
      this.users = data.filter(
        user => user._id !== this.userService.getField('_id')
      );
    });

    this.chatService.updateMessages().subscribe(data => {
      console.log('mensajes', data);
      this.selectedUser.mensajes = data;
    });
  }

  ngOnInit(): void {}

  openPanel(user: Member, indice: number) {
    console.log('open panel');
    this.statusPanel = true;
    this.tittle = user.name;
    this.selectedUser = user;
    this.chatService.joinRoom(
      indice,
      this.selectedUser._id,
      this.userService.getField('_id')
    );
  }

  sentMessage() {
    this.chatService.sentMessage({
      id1: this.selectedUser._id,
      id2: this.userService.getField('_id'),
      photo: this.userService.getField('photo'),
      mensaje: this.textInput
    });
    this.textInput = '';
  }

  logout() {
    this.chatService.logout(this.userService.getField('_id'));
    this.userService.logout();
  }
}
