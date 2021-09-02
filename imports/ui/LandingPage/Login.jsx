import { Box, Button, CssBaseline, Grid, Link, Paper, TextField, Typography } from '@material-ui/core';
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSnackBar } from '../../context/SnackBarContext';
import { useStyles } from './useStyles';

export const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const { updateSnackBarMessage } = useSnackBar();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      updateSnackBarMessage(`Please don't forget to provide an email and password!`);
      return;
    }

    Meteor.loginWithPassword(email, password, (error) => {
      if (!error) {
        history.push('/discussion-board');
      } else {
        console.error(error.error);
        updateSnackBarMessage('The email and password combination is incorrect.');
      }
    });
  };

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
          <form onSubmit={handleLoginSubmit}>
            <Grid item className={classes.gridItem}>
              <Typography align="center" color="primary" variant="h4">
                Login to your Discussion Board Account
              </Typography>
            </Grid>
            <Grid item className={classes.gridItem}>
              <TextField
                id="login-email"
                placeholder="Enter your email address"
                size="medium"
                fullWidth
                margin="normal"
                autoFocus
                color="primary"
                variant="outlined"
                label={
                  <Typography gutterBottom color="primary" variant="h6">
                    Email
                  </Typography>
                }
                name="login-email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Grid>
            <Grid item className={classes.gridItem}>
              <TextField
                id="login-password"
                placeholder="Enter your password"
                size="medium"
                fullWidth
                margin="normal"
                color="primary"
                variant="outlined"
                label={
                  <Typography gutterBottom color="primary" variant="h6">
                    Password
                  </Typography>
                }
                name="login-password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </Grid>
            <Grid item className={classes.gridItem}>
              <Box display="flex" flexDirection="row nowrap" alignItems="center" justifyContent="center">
                <Link
                  underline="none"
                  onClick={(event) => {
                    event.preventDefault();
                    history.push('/register');
                  }}
                >
                  <Button size="small" color="primary" variant="text" className={classes.submit}>
                    Register
                  </Button>
                </Link>
                <Button type="submit" size="small" color="primary" variant="contained" className={classes.submit}>
                  Login
                </Button>
              </Box>
            </Grid>
          </form>
        </Grid>
      </Paper>
    </Grid>
  );
};
