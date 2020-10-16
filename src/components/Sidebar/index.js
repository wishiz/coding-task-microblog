import React from 'react';

import Button from '../Button';

import history from '../../utils/history';

import './styles.scss';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__bg">
        <div className="sidebar__bg-text">
          <h1 className="sidebar__title">Leaf</h1>
          <p className="sidebar__desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit.
          </p>
          <Button
            className="sidebar__signin-btn"
            color="blue"
            size="lg"
            borders="rounded"
            onClick={() => history.push('/auth')}
          >
            Sign in
          </Button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
