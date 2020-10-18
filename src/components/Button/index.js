import React from 'react';

import classNames from 'classnames';
import types from 'prop-types';

import './styles.scss';

export default function Button({
  size,
  type,
  color,
  onClick,
  borders,
  children,
  className,
}) {
  const buttonClass = classNames(
    {
      button: true,
      [`button--size-${size}`]: size,
      [`button--color-${color}`]: color,
      [`button--borders-${borders}`]: borders,
    },
    className,
  );

  return (
    <button className={buttonClass} onClick={onClick} type={type}>
      {children}
    </button>
  );
}

Button.propTypes = {
  size: types.oneOf(['sm', 'md', 'lg']).isRequired,
  color: types.oneOf(['blue']).isRequired,
  children: types.node.isRequired,
  className: types.string,
  borders: types.string,
  onClick: types.func,
  type: types.string,
};
