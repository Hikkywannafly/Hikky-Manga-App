import '../styles/globals.css'
import type { AppProps } from 'next/app'
import BaseLayout from '~/layout/BaseLayout'
import React from 'react';
import { Provider, atom, useAtom } from 'jotai';
const MyApp = ({ Component, pageProps }: AppProps) => {

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
      <Provider>
        {getLayout(<Component {...pageProps} />)}
      </Provider>
    </React.Fragment>
  )
}
export default MyApp;
