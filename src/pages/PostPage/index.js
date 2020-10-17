import React, { useState, useEffect } from 'react';

import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import axios from 'axios';

import ContentWidthLimiter from '../../components/ContentWidthLimiter';
import ReactIcon from '../../components/ReactIcon';
import Comments from '../../components/Comments';
import Loader from '../../components/Loader';
import Post from '../../components/Post';

import './styles.scss';

function PostPage({ match, history }) {
  const {
    params: { postId },
  } = match;

  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get(`http://jsonplaceholder.typicode.com/posts/${postId}`)
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
        <Link to="/">
          <ReactIcon className="back-btn" size="xxxl" color="white">
            <BiArrowBack />
          </ReactIcon>
        </Link>
      </div>
      <div>
        <ContentWidthLimiter className="post-page__container">
          <Post post={post} />
          <h4 className="post-page__comments-title">
            Comments ({history.location.state.comments.length})
          </h4>
          <Comments comments={history.location.state.comments} />
        </ContentWidthLimiter>
      </div>
      <div className="post-page__sidebar sidebar--right"></div>
    </div>
  );
}

export default PostPage;
