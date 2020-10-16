import React from 'react';

import history from '../../utils/history';

import './styles.scss';

function Post({
  id,
  title,
  body,
  user,
  comments,
  allPosts,
  allUsers,
  allComments,
}) {
  return (
    <div className="post">
      <h3 className="post__title">{title}</h3>
      <p
        className="post__user"
        onClick={() => history.push(`/users/${user.id}`)}
      >
        Posted by <span>{user.name}</span>
      </p>
      <p className="post__body">{body}</p>
      <p
        className="post__comments"
        onClick={() =>
          history.push({ pathname: `/post/${id}`, state: { allComments } })
        }
      >
        Comments ({comments.length})
      </p>
      <div className="post__divider"></div>
    </div>
  );
}

export default Post;
