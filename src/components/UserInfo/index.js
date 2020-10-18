import React from 'react';

import types from 'prop-types';

import userProfilePics from '../../mocks/userProfilePics';

import './styles.scss';

function UserInfo({ user }) {
  const userPicture = userProfilePics.find(
    (userProfilePic) => userProfilePic.userId === user.id,
  ).userPic;

  return (
    <div className="user-info">
      <h1 className="user-info__name">{user.name}</h1>
      <div className="user-info__pic">
        <img className="img-cover" src={userPicture} alt="Profile_picture" />
      </div>
      <h3 className="user-info__username">Username: {user.username}</h3>
      <a className="user-info__email" href={`mailto:${user.email}`}>
        Email: {user.email}
      </a>
    </div>
  );
}

export default UserInfo;

UserInfo.propTypes = {
  user: types.objectOf(types.shape).isRequired,
};
