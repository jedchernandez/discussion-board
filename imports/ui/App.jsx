import { MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { theme } from './../themes/theme';
import { LandingPage } from './LandingPage/LandingPage';

export const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
};
