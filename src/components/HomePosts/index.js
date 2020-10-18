import React from 'react';

import { nanoid } from 'nanoid';
import types from 'prop-types';

import HomePost from '../HomePost';
import ContentWidthLimiter from '../../components/ContentWidthLimiter';

import './styles.scss';

// Fisher–Yates shuffle. Will be used later to get random posts.
const shuffleArr = (arr) => {
  var currentIndex = arr.length,
    temporaryValue,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = arr[currentIndex];

    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }

  return arr;
};

function HomePosts({ allPosts, allUsers, allComments }) {
  const getPostsIDs = () => {
    const postsIDs = [];
    allPosts.map((post) => postsIDs.push(post.id));
    return postsIDs;
  };

  const randomIDs = shuffleArr(getPostsIDs()).slice(0, 6);

  let randomPosts = [];

  for (let randomId of randomIDs) {
    let randomPost = allPosts.find((post) => post.id === randomId);
    randomPosts.push(randomPost);
  }

  function getUser(userId) {
    return allUsers.find((user) => user.id === userId);
  }

  function getComments(postId) {
    return allComments.filter((comment) => comment.postId === postId);
  }

  return (
    <ContentWidthLimiter>
      <section className="home-posts">
        <h2 className="home-posts__heading">Featured posts</h2>
        {randomPosts.map((post) => (
          <div key={nanoid()}>
            <HomePost
              comments={getComments(post.id)}
              user={getUser(post.userId)}
              title={post.title}
              body={post.body}
              id={post.id}
            />
            {post === randomPosts[randomPosts.length - 1] ? null : (
              <div className="post-divider"></div>
            )}
          </div>
        ))}
      </section>
    </ContentWidthLimiter>
  );
}

export default HomePosts;

HomePosts.propTypes = {
  allComments: types.arrayOf(types.object).isRequired,
  allPosts: types.arrayOf(types.object).isRequired,
  allUsers: types.arrayOf(types.object).isRequired,
};
