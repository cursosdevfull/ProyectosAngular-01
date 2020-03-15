import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../models/message';
import { environment } from 'src/environments/environment';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() message: Message;
  id = '';

  constructor(private readonly userService: UserService) {
    this.id = this.userService.getField('_id');
  }

  ngOnInit(): void {}

  getUrlPhoto(photo): string {
    return `${environment.apiUrl}/images/${photo}`;
  }
}
