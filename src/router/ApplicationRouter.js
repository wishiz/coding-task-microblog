import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import SignInPage from '../pages/SignInPage';
import UserPage from '../pages/UserPage';
import HomePage from '../pages/HomePage';
import PostPage from '../pages/PostPage';

import ProtectedRoute from './ProtectedRoute';

import routerUrls from '../constants/routerUrls';

function ApplicationRouter() {
  return (
    <Switch>
      <Route component={SignInPage} path={routerUrls.signin} exact></Route>
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
      <Route render={() => <Redirect to={routerUrls.home} />} />
    </Switch>
  );
}

export default ApplicationRouter;
