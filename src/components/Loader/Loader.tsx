import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useStyles } from './Loader.styles';

export const Loader: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );
};
