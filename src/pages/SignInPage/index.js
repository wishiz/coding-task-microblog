import React from 'react';

import SignInForm from '../../components/SignInForm';

import './styles.scss';

function SignInPage() {
  return (
    <div className="login-page">
      <div className="login-page__info-block">
        <SignInForm className="login-page__form" />
        <div className="login-page__sign-up"></div>
      </div>
    </div>
  );
}

export default SignInPage;
