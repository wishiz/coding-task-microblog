import React from 'react';

import history from '../../utils/history';

import './styles.scss';

function UserPost({ post, comments }) {
  return (
    <div className="user-post">
      <h4
        className="user-post__title"
        onClick={() =>
          history.push({
            pathname: `/post/${post.id}`,
            state: { comments },
          })
        }
      >
        {post.title}
      </h4>
      <h4 className="user-post__body">{post.body}</h4>
      <h4
        className="user-post__comments"
        onClick={() =>
          history.push({
            pathname: `/post/${post.id}`,
            state: { comments },
          })
        }
      >
        Comments ({comments.length})
      </h4>
    </div>
  );
}

export default UserPost;
