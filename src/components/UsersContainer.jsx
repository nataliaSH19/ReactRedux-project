import { connect } from 'react-redux';
import { follow, setCurrentPage, setIsFetching, unfollow, getUsers } from '../redux/users-reducer';
import Users from './Users';
import Preloader from './Preloader';
import { withAuthRedirect } from './hoc/withAuthRedirect';
import { compose } from 'redux';

const UsersContainer = (props) => {
  if (props.users.length === 0) {
    props.getUsers(props.currentPage, props.pageSize);
  }

  let onPageChanged = (pageNumber) => {
    props.getUsers(pageNumber, props.pageSize);
    /*
    props.setCurrentPage(pageNumber);
    props.setIsFetching(true);
    usersAPI.getUsers(pageNumber, props.pageSize).then((data) => {
      props.setIsFetching(false);
      props.setUsers(data.items);
    });*/
  };
  //if (props.isAuth === false) return <Navigate to="/login" />;
  return (
    <>
      {props.isFetching ? <Preloader /> : null}
      <div>
        <Users
          totalUsersCount={props.totalUsersCount}
          pageSize={props.pageSize}
          currentPage={props.currentPage}
          onPageChanged={onPageChanged}
          users={props.users}
          follow={props.follow}
          unfollow={props.unfollow}
          isFetching={props.isFetching}
          followingInProgress={props.followingInProgress}
        />
      </div>
    </>
  );
};

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
    isAuth: state.auth.isAuth,
  };
};
/*
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalUserdCount: (totalCount) => {
      dispatch(setTotalUserdCounAC(totalCount));
    },
    setIsFetching: (isFetching) => {
      dispatch(setIsFetchingAC(isFetching));
    },
  };
};
*/

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    setIsFetching,
    getUsers,
  }),
  //withAuthRedirect,
)(UsersContainer);
