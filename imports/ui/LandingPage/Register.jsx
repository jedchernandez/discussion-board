import { Box, Button, CssBaseline, Grid, Link, Paper, TextField, Typography } from '@material-ui/core';
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSnackBar } from '../../context/SnackBarContext';
import { useStyles } from './useStyles';

export const Register = () => {
  const classes = useStyles();
  const history = useHistory();
  const { updateSnackBarMessage } = useSnackBar();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const login = (email, password) => {
    Meteor.loginWithPassword(email, password, (error) => {
      if (!error) {
        history.push('/discussion-board');
      } else {
        console.error(error);
        updateSnackBarMessage('New account successfully created!');
      }
    });
  };

  const handleRegisterError = ({ error, reason }) => {
    if (error === 403 && reason === 'Email already exists.') {
      updateSnackBarMessage('The email you provided already exists. Please use a different email address!');
    } else {
      updateSnackBarMessage('There was an error creating the account.');
    }
    console.error(reason);
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      updateSnackBarMessage(`Please don't forget to provide an email and password!`);
      return;
    }

    Meteor.call('registerUser', { email, password }, (error) => {
      if (!error) {
        updateSnackBarMessage('New account successfully created!');

        login(email, password);
      } else {
        handleRegisterError(error);
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
          <form onSubmit={handleRegisterSubmit}>
            <Grid item className={classes.gridItem}>
              <Typography align="center" color="primary" variant="h4">
                Register your Discussion Board Account
              </Typography>
            </Grid>
            <Grid item className={classes.gridItem}>
              <TextField
                id="register-email"
                placeholder="Enter your email address"
                size="medium"
                margin="normal"
                autoFocus
                color="primary"
                variant="outlined"
                label={
                  <Typography gutterBottom color="primary" variant="h6">
                    Email
                  </Typography>
                }
                name="register-email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className={classes.textField}
                fullWidth
              />
            </Grid>
            <Grid item className={classes.gridItem}>
              <TextField
                id="register-password"
                placeholder="Enter your password"
                size="medium"
                margin="normal"
                color="primary"
                variant="outlined"
                label={
                  <Typography gutterBottom color="primary" variant="h6">
                    Password
                  </Typography>
                }
                name="register-password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className={classes.textField}
                fullWidth
              />
            </Grid>
            <Grid item className={classes.gridItem}>
              <Box display="flex" flexDirection="row nowrap" alignItems="center" justifyContent="center">
                <Link
                  underline="none"
                  onClick={(event) => {
                    event.preventDefault();
                    history.push('/');
                  }}
                >
                  <Button size="small" color="primary" variant="text" className={classes.button}>
                    Login
                  </Button>
                </Link>
                <Button type="submit" size="small" color="primary" variant="contained" className={classes.button}>
                  Register
                </Button>
              </Box>
            </Grid>
          </form>
        </Grid>
      </Paper>
    </Grid>
  );
};
