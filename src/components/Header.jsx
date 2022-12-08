import React from 'react';
import '../styles/Header.css';
import { NavLink } from 'react-router-dom';
const Header = (props) => {
  return (
    <header>
      <img
        alt="S"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1GHFzicMYaZPHv7YBikNwffrogSMVnTvLsQ&usqp=CAU"
      />
      <div className="loginBlock">
        {props.isAuth ? props.login : <NavLink to="/login">Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
