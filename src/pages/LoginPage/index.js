import React from 'react';

import { Link } from 'react-router-dom';

import LoginForm from '../../components/LoginForm';

import './styles.scss';

function LoginPage({ isLoggedIn }) {
  return (
    <div className="login-page">
      <div className="login-page__info-block">
        <LoginForm className="login-page__form" />
        <div className="login-page__sign-up">
          <p>Don't have account yet?</p>
          <Link className="login-page__sign-up-link" to="/sign-up">
            Sign up here
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
