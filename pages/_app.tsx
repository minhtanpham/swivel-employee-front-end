import React from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';

import Layout from '@/components/Layout';
import { store } from '@/redux/store';

import theme from '../theme';
import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <ThemeProvider theme={theme}>
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </StyledEngineProvider>
  </ThemeProvider>
);

export default MyApp;
