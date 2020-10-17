import React from 'react';

import Button from '../Button';

import './styles.scss';

function SignupForm({ className }) {
  return (
    <form className={`signup-form ${className}`}>
      <p className="signup-form__title">Welcome, sign up here</p>
      <div className="signup-form__input">
        <input placeholder="Name" type="text" />
      </div>
      <div className="signup-form__input">
        <input placeholder="Username" type="text" />
      </div>
      <div className="signup-form__input">
        <input placeholder="Email" type="text" />
      </div>
      <div className="signup-form__input">
        <input placeholder="Password" type="password" />
      </div>
      <div className="signup-form__input">
        <input placeholder="Confirm password" type="password" />
      </div>
      <Button
        className="signup-form__btn"
        type="submit"
        color="blue"
        size="lg"
        borders="rounded"
      >
        Sign Up
      </Button>
    </form>
  );
}

export default SignupForm;
