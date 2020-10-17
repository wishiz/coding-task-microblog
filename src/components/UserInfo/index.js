import React from 'react';

import userProfilePics from '../../mocks/userProfilePics';

import './styles.scss';

function UserInfo({ user }) {
  return (
    <div className="user-info">
      <h1 className="user-info__name">{user.name}</h1>
      <div className="user-info__pic">
        <img
          className="img-cover"
          src={
            userProfilePics.find(
              (userProfilePic) => userProfilePic.userId === user.id,
            ).userPic
          }
          alt="Profile_picture"
        />
      </div>
      <h3 className="user-info__username">Username: {user.username}</h3>
      <a className="user-info__email" href={`mailto:${user.email}`}>
        Email: {user.email}
      </a>
    </div>
  );
}

export default UserInfo;
