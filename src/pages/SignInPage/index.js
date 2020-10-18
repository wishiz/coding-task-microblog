import React from 'react';

import SignInForm from '../../components/SignInForm';

import './styles.scss';

function SignInPage() {
  return (
    <div className="signin-page">
      <div className="signin-page__main-block">
        <SignInForm className="signin-page__form" />
      </div>
    </div>
  );
}

export default SignInPage;
