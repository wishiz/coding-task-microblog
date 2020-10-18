import React from 'react';

import classnames from 'classnames';
import types from 'prop-types';

import './styles.scss';

function ContentWidthLimiter({ fullWidth, children, className, size }) {
  const contentLiminterClass = classnames(
    {
      'content-limiter': true,
      'content-limiter--full-width': fullWidth,
      [`content-limiter--size-${size}`]: size,
    },
    className,
  );

  return <div className={contentLiminterClass}>{children}</div>;
}

export default ContentWidthLimiter;

ContentWidthLimiter.propTypes = {
  children: types.node.isRequired,
  size: types.oneOf(['sm', 'lg']),
  className: types.string,
  fullWidth: types.bool,
};

ContentWidthLimiter.defaultProps = {
  size: 'lg',
};
