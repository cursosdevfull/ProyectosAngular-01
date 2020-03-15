import { Component, OnInit, Input } from '@angular/core';
import { Member } from '../models/member';

@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
  styleUrls: ['./list-messages.component.css']
})
export class ListMessagesComponent implements OnInit {
  @Input() user: Member;

  constructor() {}

  ngOnInit(): void {}
}
