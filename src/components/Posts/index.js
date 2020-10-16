import React from 'react';

import { nanoid } from 'nanoid';

import Post from '../Post';

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

function Posts({ allPosts, allUsers, allComments }) {
  const getPostsIDs = () => {
    const postsIDs = [];
    allPosts.map((post) => postsIDs.push(post.id));
    return postsIDs;
  };

  const randomIDs = shuffleArr(getPostsIDs()).slice(0, 4);

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
    <section className="home__posts">
      {randomPosts.map((post) => (
        <Post
          allPosts={allPosts}
          allUsers={allUsers}
          allComments={allComments}
          user={getUser(post.userId)}
          key={nanoid()}
          id={post.id}
          title={post.title}
          body={post.body}
          comments={getComments(post.id)}
        />
      ))}
    </section>
  );
}

export default Posts;
