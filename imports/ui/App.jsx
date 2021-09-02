import { MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { SnackBarProvider } from '../context/SnackBarContext';
import { theme } from './../themes/theme';
import { DiscussionBoard } from './DiscussionBoard/DiscussionBoard';
import { Login } from './LandingPage/Login';
import { Register } from './LandingPage/Register';

export const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <SnackBarProvider>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/discussion-board" component={DiscussionBoard} />
          </Switch>
        </SnackBarProvider>
      </BrowserRouter>
    </MuiThemeProvider>
  );
};
