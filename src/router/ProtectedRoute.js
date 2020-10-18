import React from 'react';

import { Route, Redirect } from 'react-router-dom';

import fakeAuth from '../utils/fakeAuth';

function ProtectedRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthorized === true ? (
          children
        ) : (
          <Redirect to={{ pathname: '/sign-in', state: { from: location } }} />
        )
      }
    ></Route>
  );
}

export default ProtectedRoute;
