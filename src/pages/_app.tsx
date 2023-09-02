import * as React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="bg-black h-screen text-center"> 
      <Component {...pageProps} />
      </div>
    </>
  );
}