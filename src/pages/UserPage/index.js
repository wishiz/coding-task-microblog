import React, { useState, useEffect } from 'react';

import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import axios from 'axios';

import ContentWidthLimiter from '../../components/ContentWidthLimiter';
import ReactIcon from '../../components/ReactIcon';
import UserPost from '../../components/UserPost';
import UserInfo from '../../components/UserInfo';
import Loader from '../../components/Loader';

import './styles.scss';

function UserPage({ match, history }) {
  const {
    params: { userId },
  } = match;

  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(`http://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => {
        setUser(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [userId]);

  const allPosts = history.location.state.allPosts;

  const userPosts = allPosts.filter((post) => post.userId === user.id);

  const allComments = history.location.state.allComments;

  return isLoading ? (
    <Loader />
  ) : (
    <div className="user-page">
      <div className="user-page__sidebar">
        <Link to="/">
          <ReactIcon size="xxxl" color="white" className="back-btn">
            <BiArrowBack />
          </ReactIcon>
        </Link>
      </div>
      <ContentWidthLimiter className="user-page__main-block">
        <div>
          <h2 className="user-page__block-title">Profile information</h2>
          <UserInfo user={user} />
        </div>
        <div className="user-page__posts">
          <h2 className="user-page__block-title">{`${user.name}'s posts`}</h2>
          {userPosts.map((post) => (
            <UserPost
              key={nanoid()}
              userId={history.location.state.user.id}
              post={post}
              comments={allComments.filter(
                (comment) => comment.postId === post.id,
              )}
            />
          ))}
        </div>
      </ContentWidthLimiter>
    </div>
  );
}

export default UserPage;
