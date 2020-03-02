import App from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks'
import { client } from '~/api/apollo'
import '~/styles/index.css'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ApolloProvider client={client} >
        <div className="safe-area-view">
          <Component {...pageProps} />
        </div>
      </ApolloProvider>
    );
  }
}

export default MyApp;