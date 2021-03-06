import React, { useState, useEffect } from 'react';

import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import types from 'prop-types';
import axios from 'axios';

import ContentWidthLimiter from '../../components/ContentWidthLimiter';
import ReactIcon from '../../components/ReactIcon';
import Comments from '../../components/Comments';
import Loader from '../../components/Loader';
import Post from '../../components/Post';

import './styles.scss';

function PostPage({ match }) {
  const {
    params: { postId },
  } = match;

  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => {
        setPost(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [postId]);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="post-page">
      <div className="post-page__sidebar sidebar--left">
        <Link to="/coding-task">
          <ReactIcon className="back-btn" size="xxxl">
            <BiArrowBack />
          </ReactIcon>
        </Link>
      </div>
      <div>
        <ContentWidthLimiter className="post-page__container">
          <Post post={post} />
          <Comments post={post} />
        </ContentWidthLimiter>
      </div>
      <div className="post-page__sidebar sidebar--right"></div>
    </div>
  );
}

export default PostPage;

PostPage.propTypes = {
  match: types.objectOf(types.shape).isRequired,
};
