import { Box, Button, CssBaseline, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { useStyles } from './useStyles';

export const LandingPage = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      wrap="nowrap"
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
          wrap="nowrap"
          alignItems="center"
          justifyContent="space-evenly"
          className={classes.gridItemContainer}
        >
          <Grid item className={classes.gridItem}>
            <Typography align="center" color="primary" variant="h4">
              Login to your Discussion Board Account
            </Typography>
          </Grid>
          <Grid item className={classes.gridItem}>
            <TextField
              id="email"
              placeholder="Enter your email address"
              size="medium"
              fullWidth
              margin="normal"
              autoFocus
              autoComplete="true"
              color="primary"
              variant="outlined"
              label={
                <Typography gutterBottom color="primary" variant="h6">
                  Email
                </Typography>
              }
              name="email"
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
              color="primary"
              variant="outlined"
              label={
                <Typography gutterBottom color="primary" variant="h6">
                  Password
                </Typography>
              }
              name="password"
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
