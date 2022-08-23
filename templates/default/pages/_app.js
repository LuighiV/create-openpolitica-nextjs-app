import { Fragment } from 'react';
import Head from 'next/head';

function MyOPApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>My Open Politica App</title>
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyOPApp;
