import React from 'react';

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
