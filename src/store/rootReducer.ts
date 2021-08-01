import { combineReducers } from 'redux';

import authReducer, { initialState as authState } from './auth/reducers';

export const applicationState = {
  auth: authState,
};

export default combineReducers<typeof applicationState>({
  auth: authReducer,
});
