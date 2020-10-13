import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import AuthorizationPage from '../pages/AuthorizationPage';
import UserPage from '../pages/UserPage';
import HomePage from '../pages/HomePage';

import routerUrls from '../constants/routerUrls';

function ApplicationRouter() {
  return (
    <Switch>
      <Route component={HomePage} path={routerUrls.default} exact />
      <Route component={UserPage} path={routerUrls.userPage} exact />
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
