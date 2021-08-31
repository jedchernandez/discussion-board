import { MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { theme } from './../themes/theme';
import { DiscussionBoard } from './DiscussionBoard/DiscussionBoard';
import { LandingPage } from './LandingPage/LandingPage';

export const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/discussion-board" component={DiscussionBoard} />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
};
