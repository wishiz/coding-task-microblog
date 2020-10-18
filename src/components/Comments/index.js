import React, { useState, useEffect } from 'react';

import { nanoid } from 'nanoid';
import axios from 'axios';
import types from 'prop-types';

import Comment from '../Comment';

import './styles.scss';

function Comments({ post }) {
  const [allComments, setAllComments] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((response) => setAllComments(response.data))
      .catch((error) => console.log(error));
  }, []);

  const comments = allComments.filter((comment) => comment.postId === post.id);

  return (
    <>
      <h4 className="comments__title">Comments ({comments.length})</h4>
      {comments.map((comment) => (
        <div key={nanoid()}>
          <Comment comment={comment} />
          {comment === comments[comments.length - 1] ? null : (
            <div className="comments__divider"></div>
          )}
        </div>
      ))}
    </>
  );
}

export default Comments;

Comments.propTypes = {
  post: types.objectOf(types.shape).isRequired,
};
