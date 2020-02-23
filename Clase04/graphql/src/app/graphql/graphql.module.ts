import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';

const createApollo = (httpLink: HttpLink) => {
  return {
    link: httpLink.create({ uri: 'https://xnyeq.sse.codesandbox.io/graphql' }),
    cache: new InMemoryCache(),
    defaultsOptions: {
      watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore'
      },
      query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore'
      }
    }
  };
};

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [HttpLinkModule, ApolloModule],
  providers: [
    { provide: APOLLO_OPTIONS, useFactory: createApollo, deps: [HttpLink] }
  ]
})
export class GraphqlModule {}
