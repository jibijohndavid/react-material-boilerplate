import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <header>
    <p>Material React Boilerplate</p>
    <div>
      <a
        href="https://github.com/jibijohndavid/react-material-boilerplate"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Repo
      </a>
    </div>
    <Link to="/login">Login</Link>
  </header>
);

export default Home;
