import { Box, Button, CssBaseline, Grid, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './useStyles';

export const LandingPage = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      justifyContent="space-around"
      alignItems="center"
      component="main"
      className={classes.gridContainer}
    >
      <CssBaseline />
      <Paper elevation={10} variant="elevation" className={classes.paperContainer} children>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="space-evenly"
          className={classes.gridItemContainer}
        >
          <Grid item className={classes.gridItem}>
            <Typography align="center" variant="h3">
              Welcome Back!
            </Typography>
          </Grid>
          <Grid item className={classes.gridItem}>
            <TextField
              id="email"
              placeholder="Enter your email address"
              size="medium"
              fullWidth
              margin="normal"
              autoComplete="true"
              label={<Typography variant="h6">Email</Typography>}
            />
          </Grid>
          <Grid item className={classes.gridItem}>
            <TextField
              id="password"
              placeholder="Enter your password"
              size="medium"
              fullWidth
              margin="normal"
              autoComplete="true"
              label={<Typography variant="h6">Password</Typography>}
            />
          </Grid>
          <Grid item className={classes.gridItem}>
            <Box display="flex" flexDirection="row nowrap" alignItems="center" justifyContent="center">
              <Button type="submit" size="small" color="primary" variant="contained" className={classes.submit}>
                Login
              </Button>
              <Button type="submit" size="small" color="primary" variant="contained" className={classes.submit}>
                Register
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};
