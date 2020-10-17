import React from 'react';

import { nanoid } from 'nanoid';

import HomePost from '../HomePost';
import ContentWidthLimiter from '../../components/ContentWidthLimiter';

import './styles.scss';

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
          <>
            <HomePost
              user={getUser(post.userId)}
              key={nanoid()}
              id={post.id}
              title={post.title}
              body={post.body}
              comments={getComments(post.id)}
              allPosts={allPosts}
              allUsers={allUsers}
              allComments={allComments}
            />
            {post === randomPosts[randomPosts.length - 1] ? null : (
              <div className="post-divider"></div>
            )}
          </>
        ))}
      </section>
    </ContentWidthLimiter>
  );
}

export default HomePosts;
