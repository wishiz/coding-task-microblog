import React from 'react';

import types from 'prop-types';

import Button from '../Button';

import fakeAuth from '../../utils/fakeAuth';
import history from '../../utils/history';

import './styles.scss';

function SignInForm({ className }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    fakeAuth.authorize(() => history.push('/'));
  };

  return (
    <form className={`signin-form ${className}`} onSubmit={handleSubmit}>
      <p className="signin-form__title">Welcome, sign in here</p>
      <div className="signin-form__input">
        <input placeholder="Email" type="email" />
      </div>
      <div className="signin-form__input">
        <input placeholder="Password" type="password" />
      </div>
      <Button
        className="signin-form__btn"
        borders="rounded"
        type="submit"
        color="blue"
        size="lg"
      >
        Sign in
      </Button>
    </form>
  );
}

export default SignInForm;

SignInForm.propTypes = {
  className: types.string,
};
