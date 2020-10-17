import React from 'react';

import { nanoid } from 'nanoid';

import './styles.scss';

function Comments({ comments }) {
  return comments.map((comment) => (
    <div className="comment" key={nanoid()}>
      <h3 className="comment__email">From: {comment.email}</h3>
      <h4 className="comment__name">{comment.name}</h4>
      <h4 className="comment__body">{comment.body}</h4>
      {comment === comments[comments.length - 1] ? null : (
        <div className="comment__divider"></div>
      )}
    </div>
  ));
}

export default Comments;
