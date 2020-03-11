import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import fetch from 'node-fetch'
import { HttpLink } from 'apollo-link-http'

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://34.87.133.81:3000/graphql',
    credentials: 'include',
    fetch,
  }),
})
