import React from 'react';

import classNames from 'classnames';
import types from 'prop-types';

import './styles.scss';

export default function Button({
  className,
  size,
  color,
  borders,
  onClick,
  children,
  type,
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
  color: types.oneOf(['blue', 'transparent']).isRequired,
  appearance: types.string,
  onClick: types.func,
  children: types.node.isRequired,
  className: types.string,
  type: types.string,
};
