import { Component, OnInit } from '@angular/core';
import {
  state,
  style,
  trigger,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          width: '200px',
          height: '200px',
          backgroundColor: 'yellow',
          opacity: 1,
        })
      ),

      state(
        'close',
        style({
          width: '200px',
          height: '200px',
          backgroundColor: 'red',
          opacity: 0.3,
        })
      ),

      transition('open => close', [animate('1s')]),
      transition('close => open', [animate('.5s')]),
    ]),
  ],
})
export class OpenCloseComponent implements OnInit {
  isOpen = true;

  constructor() {}

  ngOnInit(): void {}
}
