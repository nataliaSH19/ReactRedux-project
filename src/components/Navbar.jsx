import React from 'react';
import s from '../styles/Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className={s.item}>
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs">Messager</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/users">Users</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
