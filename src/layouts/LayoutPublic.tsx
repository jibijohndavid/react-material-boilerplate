import Home from 'pages/Home';
import Login from 'pages/Login';
import React from 'react';
import { Switch } from 'react-router-dom';

import PublicRoute from './PublicRoute';

const LayoutPublic = () => (
  <Switch>
    <PublicRoute path="/" exact component={Home} />
    <PublicRoute path="/login" exact component={Login} />
  </Switch>
);

export default LayoutPublic;
