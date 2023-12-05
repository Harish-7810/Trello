import { CssBaseline, ThemeProvider } from '@mui/material';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import React, { FC, ReactElement } from 'react';

import ComposeContext from './context/Compose.context';
import { Dashboard } from './pages/dashboard/dashboard';
import { ReactQueryDevtools } from 'react-query/devtools';
import { customTheme } from './theme/customTheme';
import { rootContext } from './context/root.context';

const queryClient = new QueryClient();

const App: FC = (): ReactElement => {
  return (
    <QueryClientProvider client={queryClient}>
      <ComposeContext components={rootContext}>
        <ThemeProvider theme={customTheme}>
          <CssBaseline />

          <Dashboard />
        </ThemeProvider>
      </ComposeContext>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
