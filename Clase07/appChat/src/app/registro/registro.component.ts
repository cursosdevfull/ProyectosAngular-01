import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  group: FormGroup;

  constructor(
    private readonly router: Router,
    private readonly userService: UserService
  ) {
    this.group = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      photo: new FormControl(null, Validators.required)
    });
  }

  register() {
    const value = this.group.value;

    const fd: FormData = new FormData();
    fd.append('name', value.name);
    fd.append('email', value.email);
    fd.append('password', value.password);
    fd.append('photo', value.photo);

    this.userService.register(fd);
  }

  ngOnInit(): void {}

  login() {
    this.router.navigate(['/']);
  }

  selectedFile(file: File) {
    this.group.patchValue({ photo: file });
  }
}
