import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { switchMap } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: Array<{}> = [];
  grupo: FormGroup;

  constructor(private readonly dataService: DataService) {}

  ngOnInit() {
    this.grupo = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      apellido: new FormControl(null, Validators.required)
    });

    this.listar();
  }

  listar() {
    this.dataService.list().subscribe(data => {
      this.users = [...data.listUsers];
    });
  }

  insertar() {
    const nombre = this.grupo.value.nombre;
    const apellido = this.grupo.value.apellido;

    this.dataService.insert(nombre, apellido).subscribe(() => {
      this.listar();
      this.grupo.reset();
    });
  }
}
