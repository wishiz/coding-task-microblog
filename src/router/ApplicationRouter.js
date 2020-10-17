import React, { useState } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage';
import UserPage from '../pages/UserPage';
import HomePage from '../pages/HomePage';
import PostPage from '../pages/PostPage';

import routerUrls from '../constants/routerUrls';

function ApplicationRouter() {
  const [isLoggedIn, setLoggedIn] = useState('false');
  const [user, setUser] = useState({});

  return (
    <Switch>
      <Route
        render={(props) => <LoginPage {...props} isLoggedIn={isLoggedIn} />}
        path={routerUrls.login}
        exact
      />
      <Route
        render={(props) => <SignupPage {...props} isLoggedIn={isLoggedIn} />}
        path={routerUrls.signup}
        exact
      />
      <Route
        render={(props) => <HomePage {...props} isLoggedIn={isLoggedIn} />}
        path={routerUrls.home}
        exact
      />
      <Route component={UserPage} path={`${routerUrls.users}/:userId`} />
      <Route component={PostPage} path={`${routerUrls.post}/:postId`} />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  );
}

export default ApplicationRouter;
