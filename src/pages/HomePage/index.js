import React, { useState, useEffect } from 'react';

import axios from 'axios';

import Loader from '../../components/Loader';
import Sidebar from '../../components/Sidebar';
import HomePosts from '../../components/HomePosts';

import './styles.scss';

function HomePage({ isLoggedIn }) {
  const [, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get('http://jsonplaceholder.typicode.com/posts')
        .then((result) => setPosts(result.data))
        .then(() => setIsLoading(false))
        .catch((error) => console.log(error));
    }, 1000);
  }, []);

  useEffect(() => {
    axios
      .get('http://jsonplaceholder.typicode.com/users/')
      .then((result) => setUsers(result.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get('http://jsonplaceholder.typicode.com/comments')
      .then((result) => setComments(result.data))
      .catch((error) => console.log(error));
  }, []);

  return posts.length > 0 ? (
    <div className="home">
      <Sidebar />
      <HomePosts allPosts={posts} allUsers={users} allComments={comments} />
    </div>
  ) : (
    <Loader />
  );
}

export default HomePage;
