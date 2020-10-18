import React from 'react';

import types from 'prop-types';

import './styles.scss';

function Comment({ comment }) {
  return (
    <div className="comment">
      <h3 className="comment__email">From: {comment.email}</h3>
      <h4 className="comment__name">{comment.name}</h4>
      <h4 className="comment__body">{comment.body}</h4>
    </div>
  );
}

export default Comment;

Comment.propTypes = {
  comment: types.objectOf(types.shape).isRequired,
};
