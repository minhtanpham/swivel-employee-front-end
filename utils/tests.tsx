import { render } from '@testing-library/react';
import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';

import { store } from '@/redux/store';

import theme from '../theme';

export const TestAppProvider = ({ children }: PropsWithChildren<any>) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <Provider store={store}>{children}</Provider>
      </StyledEngineProvider>
    </ThemeProvider>
  );
};

export function renderForTest(ui: React.ReactElement) {
  const { rerender, ...result } = render(
    <TestAppProvider>{ui}</TestAppProvider>
  );
  return {
    ...result,
    rerender: (rerenderUi: React.ReactElement) =>
      rerender(<TestAppProvider>{rerenderUi}</TestAppProvider>)
  };
}
