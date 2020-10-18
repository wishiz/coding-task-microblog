import React, { useState, useEffect } from 'react';

import UserPost from '../UserPost';

import { nanoid } from 'nanoid';
import types from 'prop-types';
import axios from 'axios';

function UserPosts({ user }) {
  const [allPosts, setAllPosts] = useState([]);
  const [allComments, setAllComments] = useState([]);

  useEffect(() => {
    axios
      .get('http://jsonplaceholder.typicode.com/posts/')
      .then((response) => setAllPosts(response.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get('http://jsonplaceholder.typicode.com/comments')
      .then((response) => setAllComments(response.data))
      .catch((error) => console.log(error));
  }, []);

  const userPosts = allPosts.filter((post) => post.userId === user.id);

  return userPosts.map((post) => (
    <UserPost
      comments={allComments.filter((comment) => comment.postId === post.id)}
      key={nanoid()}
      post={post}
    />
  ));
}

export default UserPosts;

UserPosts.propTypes = {
  user: types.objectOf(types.shape).isRequired,
};
