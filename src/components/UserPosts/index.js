import React, { useState, useEffect } from 'react';

import UserPost from '../UserPost';

import axios from 'axios';
import { nanoid } from 'nanoid';

import './styles.scss';

function UserPosts({ user }) {
  const [allPosts, setAllPosts] = useState([]);
  const [allComments, setAllComments] = useState([]);

  useEffect(() => {
    axios
      .get('http://jsonplaceholder.typicode.com/posts/')
      .then((result) => setAllPosts(result.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get('http://jsonplaceholder.typicode.com/comments')
      .then((result) => setAllComments(result.data))
      .catch((error) => console.log(error));
  }, []);

  const userPosts = allPosts.filter((post) => post.userId === user.id);

  return userPosts.map((post) => (
    <UserPost
      key={nanoid()}
      post={post}
      comments={allComments.filter((comment) => comment.postId === post.id)}
    />
  ));
}

export default UserPosts;
