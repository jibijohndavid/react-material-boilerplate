import { CssBaseline, ThemeProvider } from '@material-ui/core';
import AppRoutes from 'layouts/AppRoutes';
import React from 'react';
import { Provider } from 'react-redux';
import { lightTheme } from 'utils/theme';

import store from './store/configureStore';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
