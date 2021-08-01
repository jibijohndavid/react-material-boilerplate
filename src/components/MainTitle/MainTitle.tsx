import { Typography } from '@material-ui/core';
import React from 'react';

import useStyles from './styles';

type MainTitlePageProps = {
  title: string;
};

const MainTitle = ({ title }: MainTitlePageProps) => {
  const styles = useStyles();
  return (
    <Typography variant="h1" className={styles.title}>
      {title}
    </Typography>
  );
};

export default MainTitle;
