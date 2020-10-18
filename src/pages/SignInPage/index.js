import React from 'react';

import ContentWidthLimiter from '../../components/ContentWidthLimiter';
import SignInForm from '../../components/SignInForm';

import './styles.scss';

function SignInPage() {
  return (
    <div className="signin-page">
      <ContentWidthLimiter className="signin-page__container">
        <SignInForm className="signin-page__form" />
      </ContentWidthLimiter>
    </div>
  );
}

export default SignInPage;
