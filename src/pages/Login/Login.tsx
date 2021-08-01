import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  LoginPageProps,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_SUCCESS,
} from 'store/auth/types';

const Login = ({ loading, isLoggedIn }: LoginPageProps) => {
  const dispatch = useDispatch();

  const handleLogout = useCallback(() => {
    if (isLoggedIn) {
      dispatch({
        type: USER_LOGOUT_SUCCESS,
      });
    } else {
      dispatch({
        type: USER_LOGIN_SUCCESS,
      });
    }
  }, [dispatch, isLoggedIn]);

  useEffect(() => {
    dispatch({
      type: USER_LOGIN_SUCCESS,
    });
  }, [dispatch]);

  return (
    <header>
      <p>Material React Boilerplate - Login</p>
      <button type="button" onClick={handleLogout} disabled={loading}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
      <div>
        <Link to="/">Home</Link>
      </div>
    </header>
  );
};

export default Login;
