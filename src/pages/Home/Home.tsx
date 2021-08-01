import { Box, Button, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <Box component="header">
    <Typography variant="h1">Material React Boilerplate</Typography>
    <Button component={Link} to="/login" variant="outlined">
      Login
    </Button>
  </Box>
);

export default Home;
