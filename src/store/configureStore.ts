import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';

import rootReducer, { applicationState } from './rootReducer';

const isDevelopment =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

const middlewares = isDevelopment ? [createLogger()] : [];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const store = createStore<typeof applicationState, any, unknown, unknown>(
  rootReducer,
  applicationState,
  compose(applyMiddleware(...middlewares)),
);

export default store;
