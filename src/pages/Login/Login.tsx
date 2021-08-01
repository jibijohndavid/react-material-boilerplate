import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS } from 'store/auth/types';

const Login = () => {
  const dispatch = useDispatch();

  const handleLogout = useCallback(() => {
    dispatch({
      type: USER_LOGOUT_SUCCESS,
    });
  }, [dispatch]);

  useEffect(() => {
    dispatch({
      type: USER_LOGIN_SUCCESS,
    });
  }, [dispatch]);

  return (
    <div>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Login;
