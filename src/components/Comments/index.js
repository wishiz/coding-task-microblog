import React, { useState, useEffect } from 'react';

import { nanoid } from 'nanoid';
import axios from 'axios';

import Comment from '../Comment';

import './styles.scss';

function Comments({ post }) {
  const [allComments, setAllComments] = useState([]);

  useEffect(() => {
    axios
      .get('http://jsonplaceholder.typicode.com/comments')
      .then((result) => setAllComments(result.data))
      .catch((error) => console.log(error));
  }, []);

  console.log('allComments :', allComments);

  const comments = allComments.filter((comment) => comment.postId === post.id);

  return comments.map((comment) => (
    <>
      <h4 className="post-page__comments-title">
        Comments ({comments.length})
      </h4>
      <Comment comment={comment} key={nanoid()} />
      {comment === comments[comments.length - 1] ? null : (
        <div className="comment__divider"></div>
      )}
    </>
  ));
}

export default Comments;
