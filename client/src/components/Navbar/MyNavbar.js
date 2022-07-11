import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



export default function MyNavbar() {
  return (
      <div className='navBar'>
        <div className='mainLabel' src='../../../public/index.html'>jhnbgyytvyvy</div>
        <div className='headNav'>           
          <Link to="/">Главная</Link>
          <Link to="/auth">Авторизация</Link>
          <Link to="/1">ЗАКАЗЧИК</Link>
          <Link to="/2"> ХУДОЖНИК </Link>
          <Link to="/ihavepaint"> КРАСКИ </Link>
          <Link to="/ihavewall"> СТЕНА </Link>
          <Link to="/personalarea"> Личный кабинет</Link>
        </div>
        <div className='signIn'>jhxsdfghjkjhg</div>
      </div>
  );
}

