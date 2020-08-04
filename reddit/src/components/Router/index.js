import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import LoginPage from '../LoginPage/index';
import AppBarComponent from '../AppBar/index';
import SignUpPage from  '../SignUpPage/index';
import FeedPage from '../FeedPage/index';
import SinglePostPage from '../SinglePostPage/index';

export default function Router () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <LoginPage />
        </Route>
        <Route exact path='/loggedIn/SignUpPage'>
          <SignUpPage />
        </Route>
        <Route exact path='/loggedIn/FeedPage'>
          <AppBarComponent />
          <FeedPage />
        </Route>
        <Route exact path='/loggedIn/SinglePostPage/:PostId'>
          <AppBarComponent />
          <SinglePostPage />
        </Route>
        <Route path='/'>
          <h3>Ata bixiga, não foi vissi (404)</h3>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};