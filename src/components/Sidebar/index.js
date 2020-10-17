import React from 'react';

import Button from '../Button';
import ContentWidthLimiter from '../ContentWidthLimiter';

import history from '../../utils/history';

import './styles.scss';

function Sidebar() {
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
            color="blue"
            size="lg"
            borders="rounded"
            onClick={() => history.push('/auth')}
          >
            Sign out
          </Button>
        </div>
      </ContentWidthLimiter>
    </aside>
  );
}

export default Sidebar;
