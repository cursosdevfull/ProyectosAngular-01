import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  group: FormGroup;
  users = [];

  constructor() {
    this.group = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      apellido: new FormControl(null, Validators.required),
    });
  }

  add() {
    this.users.push(this.group.value);
    this.group.reset();
  }

  exportToExcel() {
    const ref = document.querySelector('table');
    const sheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(ref);

    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, sheet, 'List of Users');

    XLSX.writeFile(book, 'ExcelPrueba.xlsx');
  }
}
