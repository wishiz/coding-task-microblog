import React from 'react';

import history from '../../utils/history';

import './styles.scss';

function HomePost({ id, title, body, user, comments }) {
  return (
    <div className="home-post">
      <h3
        className="home-post__title"
        onClick={() =>
          history.push({
            pathname: `/post/${id}`,
          })
        }
      >
        {title}
      </h3>
      <p
        className="home-post__user"
        onClick={() =>
          history.push({
            pathname: `/user/${user.id}`,
          })
        }
      >
        Posted by <span>{user.username}</span>
      </p>
      <p className="home-post__body">{body}</p>
      <p
        className="home-post__comments"
        onClick={() =>
          history.push({
            pathname: `/post/${id}`,
          })
        }
      >
        Comments ({comments.length})
      </p>
    </div>
  );
}

export default HomePost;
