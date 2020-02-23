import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users = [];

  constructor(private readonly dataService: DataService) {}

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.dataService.list().subscribe(data => {
      console.log(data);
      this.users = data.listUsers;
    });
  }

  insertar() {
    this.dataService.insert('Juan', 'Pérez').subscribe(() => this.listar());
  }
}
