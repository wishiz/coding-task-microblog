import React from 'react';

import types from 'prop-types';

import './styles.scss';

function Post({ post }) {
  return (
    <div className="post">
      <h1 className="post__title">{post.title}</h1>
      <h2 className="post__body">{post.body}</h2>
      <div className="post__divider" />
    </div>
  );
}

export default Post;

Post.propTypes = {
  post: types.objectOf(types.shape).isRequired,
};
