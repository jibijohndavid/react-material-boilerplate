import { Box, Button } from '@material-ui/core';
import MainTitle from 'components/MainTitle';
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

  useEffect(() => {
    dispatch({
      type: USER_LOGIN_SUCCESS,
    });
  }, [dispatch]);

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
  return (
    <Box component="header">
      <MainTitle title="Login Page" />

      <Button component={Link} to="/" variant="outlined">
        Back to Home
      </Button>
      <Button onClick={handleLogout} disabled={loading}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </Button>
    </Box>
  );
};

export default Login;
