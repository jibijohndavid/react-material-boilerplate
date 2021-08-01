import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import LayoutPublic from './LayoutPublic';
import PublicRoute from './PublicRoute';

const AppRoutes = () => (
  <Router>
    <Switch>
      <PublicRoute restricted={false} path="/" component={LayoutPublic} />
    </Switch>
  </Router>
);

export default AppRoutes;
