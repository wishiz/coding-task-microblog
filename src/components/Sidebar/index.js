import React from 'react';

import Button from '../Button';
import ContentWidthLimiter from '../ContentWidthLimiter';

import history from '../../utils/history';
import fakeAuth from '../../utils/fakeAuth';

import './styles.scss';

function Sidebar() {
  const handleClick = () => {
    fakeAuth.signout(() => history.push('/coding-task/sign-in'));
  };

  return (
    <aside className="sidebar">
      <ContentWidthLimiter className="sidebar__container">
        <div className="sidebar__text-block">
          <h1 className="sidebar__title">Leafblog</h1>
          <p className="sidebar__desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit.
          </p>
          <Button
            className="sidebar__signin-btn"
            onClick={handleClick}
            borders="rounded"
            color="blue"
            size="lg"
          >
            Sign out
          </Button>
        </div>
      </ContentWidthLimiter>
    </aside>
  );
}

export default Sidebar;
