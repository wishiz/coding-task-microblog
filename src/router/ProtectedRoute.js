import React from 'react';

import { Route, Redirect } from 'react-router-dom';

import fakeAuth from '../utils/fakeAuth';

function ProtectedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        fakeAuth.isAuthorized ? (
          <Component {...props} />
        ) : (
          <Redirect to="/sign-in" />
        )
      }
    ></Route>
  );
}

export default ProtectedRoute;
