import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';

import './styles.scss';

function PostPage({ match }) {
  const {
    params: { postId },
  } = match;

  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get(`http://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => {
        console.log(response);
        setPost(response.data);
        setIsLoading(false);
        console.log(`http://jsonplaceholder.typicode.com/posts/${postId}`);
      })
      .catch((error) => console.log(error));
  }, [postId]);

  return (
    <div>
      {!isLoading && (
        <>
          <h1>Title: {post.title}</h1>
          <h2>Body: {post.body}</h2>
          <div className="postpage__divider"></div>
          <div className="postpage__comments"></div>
          <Link to="/">Back to homepage</Link>
        </>
      )}
    </div>
  );
}

export default PostPage;
