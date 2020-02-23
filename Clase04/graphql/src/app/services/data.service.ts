import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import gql from 'graphql-tag';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private readonly apollo: Apollo) {}

  list(): Observable<any> {
    return this.apollo
      .query({
        query: gql`
          query {
            listUsers {
              name
              lastname
            }
          }
        `
      })
      .pipe(pluck('data'));
  }

  insert(name: string, lastname: string): Observable<any> {
    return this.apollo
      .mutate({
        mutation: gql`
        mutation {
          insert(user: { name: "${name}", lastname: "${lastname}" })
        }
      `
      })
      .pipe(pluck('data'));
  }
}
