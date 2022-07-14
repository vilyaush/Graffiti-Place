import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOutUserThunk } from '../../redux/action/user';

import logo from '../../assets/Union.png';

export default function MyNavbar() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOutUserThunk());
  };
  // console.log(user, 'NAVBAR_USER');
  return (
    <div className="navBar">
      <Link to="/"><img src={logo} alt="logo" /></Link>

      <div className="headNav">
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>{user && user.id ? <Link to="/" onClick={handleLogout}>Выйти</Link> : <Link to="/auth">Войти</Link>}</li>
        <li>
          {user && user.id ? <Link to="/personalarea"> Личный кабинет</Link> : null}
        </li>
      </div>
    </div>
  );
}
