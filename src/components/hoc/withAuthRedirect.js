import React from 'react'
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

export const withAuthRedirect = (Component) => {
  let RedirectComponent=(props)=>{
      if (props.isAuth === false) return <Navigate to="/login" />
      return <Component/>
    
  }
  let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth,
  });
  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

  return ConnectedAuthRedirectComponent;

}

