import Login from 'pages/Login';
import React from 'react';
import { Provider } from 'react-redux';

import store from './store/configureStore';

function App() {
  return (
    <Provider store={store}>
      <header>
        <p>Material React Boilerplate</p>
        <a
          href="https://github.com/jibijohndavid/react-material-boilerplate"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Repo
        </a>
        <Login />
      </header>
    </Provider>
  );
}

export default App;
