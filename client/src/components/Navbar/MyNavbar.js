import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { logOutUserThunk } from '../../redux/action/user';

export default function MyNavbar() {
  const [loginToggle, setLoginToggle] = useState(false);
  const user = useSelector((state) => state.user);
  // console.log(user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOutUserThunk());
  };

  const renderLogout = () => <Link to="/" onClick={handleLogout}>Выйти</Link>;
  const renderLoginIn = () => <Link to="/auth">Войти</Link>;
  return (
    <div className="navBar">
      <div className="mainLabel">
        <Link to="/" />
      </div>
      <div className="headNav">
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>{loginToggle ? renderLogout() : renderLoginIn()}</li>
        <li>
          <Link to="/personalarea"> Личный кабинет</Link>
        </li>
      </div>
      {/* <div className="signIn">jhxsdfgwsderftgyhhjkjhg</div> */}
    </div>
  );
}
