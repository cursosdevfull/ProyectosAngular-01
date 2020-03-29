import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {
  startWith,
  map,
  debounceTime,
  distinctUntilChanged
} from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  opcionesFiltradas: Observable<string[]>;

  ctrl: FormControl;

  countries = ['Perú', 'Panamá', 'Uruguay', 'Argentina', 'Bolivia', 'Ecuador'];

  constructor(private readonly http: HttpClient) {
    this.ctrl = new FormControl();

    this.opcionesFiltradas = this.ctrl.valueChanges.pipe(
      startWith(''),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(value => this.filterCountries(value))
      // map(value => this.filtrarPaises(value))
      /*       map(value =>
        this.countries.filter(country => country.toLowerCase().includes(value))
      ) */
    );
  }

  filterCountries(filter: string): Observable<any[]> {
    return this.http.get('https://covid19.mathdro.id/api/confirmed').pipe(
      map((regs: any[]) => {
        const objCountries = regs.reduce((acum, value) => {
          if (
            !acum[value.countryRegion] &&
            value.countryRegion.toLowerCase().includes(filter.toLowerCase())
          ) {
            acum[value.countryRegion] = 1;
          }
          return acum;
        }, {});

        const countries = [];
        for (const prop in objCountries) {
          if (prop) {
            countries.push(prop);
          }
        }

        countries.sort((a, b) => (a > b ? 1 : -1));

        return countries;
      })
    );
  }

  filtrarPaises(filter: string) {
    return this.countries.filter(country =>
      country.toLowerCase().includes(filter.toLowerCase())
    );
  }

  selected(ev: MatAutocompleteSelectedEvent) {
    console.log(ev.option.value);
  }
}
