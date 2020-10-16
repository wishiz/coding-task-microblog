import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import AuthorizationPage from '../pages/AuthorizationPage';
import UserPage from '../pages/UserPage';
import HomePage from '../pages/HomePage';
import PostPage from '../pages/PostPage';

import routerUrls from '../constants/routerUrls';

function ApplicationRouter() {
  return (
    <Switch>
      <Route component={HomePage} path={routerUrls.default} exact />
      <Route component={UserPage} path={`${routerUrls.users}/:userId`} />
      <Route component={PostPage} path={`${routerUrls.post}/:postId`} />
      <Route
        component={AuthorizationPage}
        path={routerUrls.authorization}
        exact
      />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  );
}

export default ApplicationRouter;
