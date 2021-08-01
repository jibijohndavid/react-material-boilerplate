import AppRoutes from 'layouts/AppRoutes';
import React from 'react';
import { Provider } from 'react-redux';

import store from './store/configureStore';

function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
