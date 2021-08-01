import { createStyles, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import LayoutPublic from './LayoutPublic';
import PublicRoute from './PublicRoute';

const useStyles = makeStyles(() =>
  createStyles({
    bodyRoot: {
      overflow: 'hidden',
      height: '100vh',
    },
  }),
);

const AppRoutes = () => {
  const styles = useStyles();

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      className={styles.bodyRoot}
    >
      <Router>
        <Switch>
          <PublicRoute restricted={false} path="/" component={LayoutPublic} />
        </Switch>
      </Router>
    </Grid>
  );
};

export default AppRoutes;
