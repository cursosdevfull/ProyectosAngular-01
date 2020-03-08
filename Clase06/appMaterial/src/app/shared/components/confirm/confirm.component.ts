import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  mensaje = '¿Está seguro?';

  constructor(public referencia: MatDialogRef<ConfirmComponent>) {}

  ngOnInit(): void {}
}
