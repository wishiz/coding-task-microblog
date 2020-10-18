import React from 'react';

import { Router } from 'react-router-dom';

import ApplicationRouter from './router/ApplicationRouter';
import history from './utils/history';

function App() {
  return (
    <div className="app-container">
      <Router history={history}>
        <ApplicationRouter />
      </Router>
    </div>
  );
}

export default App;
