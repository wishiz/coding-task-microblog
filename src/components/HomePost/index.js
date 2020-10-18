import React from 'react';

import types from 'prop-types';

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
      <p>{body}</p>
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

HomePost.propTypes = {
  comments: types.arrayOf(types.object),
  user: types.objectOf(types.shape),
  body: types.string.isRequired,
  id: types.number.isRequired,
  title: types.string,
};

HomePost.defaultProps = {
  title: 'Post title',
  user: 'one of our users',
};
