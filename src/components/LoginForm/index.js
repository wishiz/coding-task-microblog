import React from 'react';

import Button from '../Button';

import fakeAuth from '../../utils/fakeAuth';
import history from '../../utils/history';

import './styles.scss';

function LoginForm({ className }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    fakeAuth.authorize(() => history.push('/home'));
    console.log(e);
  };

  return (
    <form className={`login-form ${className}`} onSubmit={handleSubmit}>
      <p className="login-form__title">Welcome, sign in here</p>
      <div className="login-form__input">
        <input placeholder="Email" type="text" />
      </div>
      <div className="login-form__input">
        <input placeholder="Password" type="password" />
      </div>
      <Button
        className="login-form__btn"
        type="submit"
        color="blue"
        size="lg"
        borders="rounded"
      >
        Sign in
      </Button>
    </form>
  );
}

export default LoginForm;
