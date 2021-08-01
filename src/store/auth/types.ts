export type AuthStateType = {
  loading: boolean;
  loginSuccess: boolean;
};

export type LoginPageProps = {
  loading: boolean;
  isLoggedIn: boolean;
};

// Type
export const USER_LOGIN_INIT = 'USER:LOGIN::INIT';
export const USER_LOGIN_SUCCESS = 'USER:LOGIN::SUCCESS';
export const USER_LOGIN_FAIL = 'USER:LOGIN::FAIL';

export const USER_LOGOUT_INIT = 'USER:LOGOUT::INIT';
export const USER_LOGOUT_SUCCESS = 'USER:LOGOUT::SUCCESS';
export const USER_LOGOUT_FAIL = 'USER:LOGOUT::FAIL';

// Login Action Types
type UserLoginInitAction = {
  type: typeof USER_LOGIN_INIT;
};
type UserLoginSuccessAction = {
  type: typeof USER_LOGIN_SUCCESS;
};
type UserLoginFailAction = {
  type: typeof USER_LOGIN_FAIL;
};

// Logout Action Types
type UserLogoutInitAction = {
  type: typeof USER_LOGOUT_INIT;
};
type UserLogoutSuccessAction = {
  type: typeof USER_LOGOUT_SUCCESS;
};
type UserLogoutFailAction = {
  type: typeof USER_LOGOUT_FAIL;
};

export type AuthActionTypes =
  | UserLoginInitAction
  | UserLoginSuccessAction
  | UserLoginFailAction
  | UserLogoutInitAction
  | UserLogoutSuccessAction
  | UserLogoutFailAction;
