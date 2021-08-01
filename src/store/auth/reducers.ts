import {
  AuthActionTypes,
  AuthStateType,
  USER_LOGIN_FAIL,
  USER_LOGIN_INIT,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_FAIL,
  USER_LOGOUT_INIT,
  USER_LOGOUT_SUCCESS,
} from './types';

export const initialState: AuthStateType = {
  loading: false,
  loginSuccess: false,
};

export default (state = initialState, action: AuthActionTypes) => {
  switch (action.type) {
    case USER_LOGIN_INIT:
    case USER_LOGOUT_INIT: {
      return { ...state, loading: true };
    }

    case USER_LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        loginSuccess: true,
      };
    }

    case USER_LOGIN_FAIL:
    case USER_LOGOUT_FAIL:
    case USER_LOGOUT_SUCCESS: {
      return { loading: false, loginSuccess: false };
    }

    default:
      return state;
  }
};
