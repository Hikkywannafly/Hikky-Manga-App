import '../styles/globals.css'
import type { AppProps } from 'next/app'
import BaseLayout from '~/layout/BaseLayout'
import React from 'react';
import { QueryClient, QueryClientProvider } from "react-query";
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

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        retry: 1,
      },
    },

  });

  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        {getLayout(<Component {...pageProps} />)}
      </QueryClientProvider>

    </React.Fragment>
  )
}
export default MyApp;


