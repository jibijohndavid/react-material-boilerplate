/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

type PublicRouteType = {
  restricted?: boolean;
  path?: string;
  exact?: boolean;
  component: any;
};

const isLogin = false;

const PublicRoute = ({
  restricted,
  path,
  exact,
  component: Component,
}: PublicRouteType) => (
  <Route
    path={path}
    exact={exact}
    render={(props) =>
      isLogin && restricted ? <Redirect to="/" /> : <Component {...props} />
    }
  />
);
export default PublicRoute;
