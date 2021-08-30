import { CssBaseline, Grid, Paper } from '@material-ui/core';
import React from 'react';
import { useStyles } from './useStyles';

export const LandingPage = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justifyContent="space-around"
      alignItems="center"
      component="main"
      className={classes.gridContainer}
    >
      <CssBaseline />
      <Paper elevation={10} variant="elevation" className={classes.paperContainer}>
        {/* Landing Page
      TODO: Create Login/Register UI */}
      </Paper>
    </Grid>
  );
};
