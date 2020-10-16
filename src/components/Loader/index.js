import React from 'react';

import loadingIcon from '../../assets/icons/loadingIcon.png';

import './styles.scss';

function Loader() {
  return (
    <div className="app-loading">
      <div className="app-loading__icon-wrapper">
        <img src={loadingIcon} alt="Loading icon"></img>
      </div>
    </div>
  );
}

export default Loader;
