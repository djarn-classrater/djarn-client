import App from 'next/app';
import '~/styles/index.css'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div className="safe-area-view">
        <Component {...pageProps} />
      </div>
    );
  }
}

export default MyApp;