import React from 'react';

import SignupForm from '../../components/SignupForm';

import './styles.scss';

function SignupPage({ isLoggedIn }) {
  return (
    <div className="signup-page">
      <div className="signup-page__info-block">
        <SignupForm className="signup-page__form" />
      </div>
    </div>
  );
}

export default SignupPage;
