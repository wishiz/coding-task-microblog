import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import axios from 'axios';

function UserPage({ match }) {
  const {
    params: { userId },
  } = match;

  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(`http://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => {
        console.log(response);
        setUser(response.data);
        setIsLoading(false);
        console.log(`http://jsonplaceholder.typicode.com/users/${userId}`);
      })
      .catch((error) => console.log(error));
  }, [userId]);

  return (
    <div>
      {!isLoading && (
        <>
          <h1>Name: {user.name}</h1>
          <h2>Username: {user.username}</h2>
          {}
          <div className="user__posts">{}</div>
          <div></div>
          <Link to="/">Back to homepage</Link>
        </>
      )}
    </div>
  );
}

export default UserPage;
