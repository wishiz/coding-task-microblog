import React from 'react';

import { Router } from 'react-router-dom';

import ApplicationRouter from './router/ApplicationRouter';

import history from './utils/history';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <ApplicationRouter />
      </Router>
    </div>
  );
}

export default App;
