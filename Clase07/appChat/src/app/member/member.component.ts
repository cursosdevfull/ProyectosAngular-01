import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Member } from '../models/member';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit, OnChanges {
  @Input() member: Member;
  @Input() selected = false;
  @Input() selectedUser: Member;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {
    if (this.selectedUser) {
      this.selected = this.selectedUser._id === this.member._id;
    }
  }

  getUrlPhoto(photo: string): string {
    return `${environment.apiUrl}/images/${photo}`;
  }
}
