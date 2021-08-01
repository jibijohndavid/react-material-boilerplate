import { Box, Button, Typography } from '@material-ui/core';
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
    <Box component="header">
      <Typography variant="h1">Material React Boilerplate</Typography>
      <Button component={Link} to="/" variant="outlined">
        Back to Home
      </Button>
      <Button variant="outlined" onClick={handleLogout} disabled={loading}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </Button>
    </Box>
  );
};

export default Login;
