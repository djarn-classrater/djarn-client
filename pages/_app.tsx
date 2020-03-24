import App from 'next/app'
import React from 'react'
import styled from 'styled-components'
import { ApolloProvider } from '@apollo/react-hooks'
import { client } from '~/api/apollo'
import 'normalize.css'
import '~/styles/index.css'

const Container = styled.div`
  padding: 0.5rem;
`

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ApolloProvider client={client}>
        <Container className="safe-area-view">
          <Component {...pageProps} />
        </Container>
      </ApolloProvider>
    )
  }
}

export default MyApp
