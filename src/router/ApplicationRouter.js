import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage';
import UserPage from '../pages/UserPage';
import HomePage from '../pages/HomePage';
import PostPage from '../pages/PostPage';

import ProtectedRoute from './ProtectedRoute';

import routerUrls from '../constants/routerUrls';

function ApplicationRouter() {
  return (
    <Switch>
      <Route component={LoginPage} path={routerUrls.signin} exact></Route>
      <Route component={SignupPage} path={routerUrls.signup} exact />
      <ProtectedRoute
        component={HomePage}
        path={routerUrls.home}
        exact
      ></ProtectedRoute>
      <ProtectedRoute
        component={UserPage}
        path={`${routerUrls.user}/:userId`}
      />
      <ProtectedRoute
        component={PostPage}
        path={`${routerUrls.post}/:postId`}
      />
      {/* <Route render={() => <Redirect to={routerUrls.signin} />} /> */}
    </Switch>
  );
}

export default ApplicationRouter;
