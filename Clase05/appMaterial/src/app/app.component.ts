import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { pluck, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appMaterial';
  handset: Observable<boolean>;

  constructor(private readonly breakpointObserver: BreakpointObserver) {
    this.handset = this.breakpointObserver
      .observe([Breakpoints.Handset])
      .pipe(map(respuesta => respuesta.matches));
  }
}
