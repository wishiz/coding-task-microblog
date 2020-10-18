import React, { useState, useEffect } from 'react';

import axios from 'axios';

import Loader from '../../components/Loader';
import Sidebar from '../../components/Sidebar';
import HomePosts from '../../components/HomePosts';

import './styles.scss';

function HomePage() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get('http://jsonplaceholder.typicode.com/posts')
        .then((response) => setPosts(response.data))
        .then(() => setIsLoading(false))
        .catch((error) => console.log(error));
    }, 1000);
  }, []);

  useEffect(() => {
    axios
      .get('http://jsonplaceholder.typicode.com/users/')
      .then((response) => setUsers(response.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get('http://jsonplaceholder.typicode.com/comments')
      .then((response) => setComments(response.data))
      .catch((error) => console.log(error));
  }, []);

  return !isLoading ? (
    <div className="home">
      <Sidebar />
      <HomePosts allPosts={posts} allUsers={users} allComments={comments} />
    </div>
  ) : (
    <Loader />
  );
}

export default HomePage;
