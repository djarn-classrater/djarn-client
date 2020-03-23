import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { client } from '~/api/apollo'
import '~/styles/index.css'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ApolloProvider client={client}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
        </Head>
        <div className="safe-area-view">
          <Component {...pageProps} />
        </div>
      </ApolloProvider>
    )
  }
}

export default MyApp
