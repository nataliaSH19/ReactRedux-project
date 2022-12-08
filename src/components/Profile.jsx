import React from 'react';
import '../styles/Profile.css';

import MyPostsContainer from './MyPostsContainer';
import ProfileInfo from './ProfileInfo';

const Profile = (props) => {
  return (
    <div className="content">
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer  />
    </div>
  );
};

export default Profile;
