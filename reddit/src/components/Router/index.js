import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import LoginPage from '../LoginPage/index';
import SignUpPage from  '../SignUpPage/index';
import FeedPage from '../FeedPage/index';
import SinglePostPage from '../SinglePostPage/index'

export default function Router () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/LoginPage'>
          <LoginPage />
        </Route>
        <Route exact path='/SignUpPage'>
          <SignUpPage />
        </Route>
        <Route exact path='/FeedPage'>
          <FeedPage />
        </Route>
        <Route exact path='/'>
          <SinglePostPage />
        </Route>
        <Route path='/'>
          <h3>Ata bixiga, não foi vissi (404)</h3>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};