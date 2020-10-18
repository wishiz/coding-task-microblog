import React from 'react';

import classnames from 'classnames';
import types from 'prop-types';

import './styles.scss';

function ReactIcon({ className, color, size, onClick, id, children }) {
  const reactIconClass = classnames(
    {
      'react-icon': true,
      [`react-icon--color-${color}`]: color,
      [`react-icon--size-${size}`]: size,
    },
    className,
  );

  return (
    <div className={reactIconClass} onClick={onClick} id={id}>
      {children}
    </div>
  );
}

export default ReactIcon;

ReactIcon.propTypes = {
  color: types.oneOf(['white', 'black']),
  className: types.string,
  onClick: types.func,
  size: types.string,
  id: types.string,
};

ReactIcon.defaultProps = {
  color: 'white',
};
