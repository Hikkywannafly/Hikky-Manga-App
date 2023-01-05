import '../styles/globals.css'
import type { AppProps } from 'next/app'
import BaseLayout from '~/layout/BaseLayout'
import React from 'react';
export default function MyApp({ Component, pageProps }: AppProps) {

  const getLayout =
    // @ts-ignore
    Component.getLayout ??
    // @ts-ignore
    ((page) => (
      <BaseLayout>
        {page}
      </BaseLayout>
    ));


  return (
    <React.Fragment>
      {getLayout(<Component {...pageProps} />)}
    </React.Fragment>
  )
}
