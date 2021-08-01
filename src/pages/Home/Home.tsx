import { Box, Button } from '@material-ui/core';
import MainTitle from 'components/MainTitle';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <Box component="header">
    <MainTitle title="Home Page" />
    <Button component={Link} to="/login" variant="outlined">
      Login Page
    </Button>
  </Box>
);

export default Home;
