import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { pluck, map } from 'rxjs/operators';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  handset: Observable<boolean>;
  group: FormGroup;

  constructor(private readonly breakpointObserver: BreakpointObserver) {
    this.handset = this.breakpointObserver
      .observe([Breakpoints.Handset])
      .pipe(map(respuesta => respuesta.matches));
  }
}
