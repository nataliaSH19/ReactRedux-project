import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from '../redux/profile-reducer';
import { useParams } from 'react-router-dom';
import { withAuthRedirect } from './hoc/withAuthRedirect';
import { compose } from 'redux';

const ProfileContainer = (props) => {
  let { userId } = useParams();

  if (!userId) {
    userId = 2;
  }
  props.getUserProfile(userId);
  return <Profile {...props} profile={props.profile} />;
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});
//let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default compose(
  connect(mapStateToProps, { getUserProfile }),
 // withAuthRedirect,
)(ProfileContainer);
