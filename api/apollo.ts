import { ApolloClient } from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory'
import fetch from 'cross-fetch'
import { HttpLink } from 'apollo-link-http'
import cookie from '~/api/cookie'

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://34.87.133.81:3000/graphql',
    // credentials: 'include',
    fetch,
    headers: {
      authorization: `Bearer ${cookie.get('token')}`,
    },
  }),
})
