import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



export default function MyNavbar() {
  return (
      <div className='navBar'>
        <div className='mainLabel'>      
          <Link to="/"></Link>
        </div>
        <div className='headNav'>  
          <li>
          <Link to="/1">ЗАКАЗЧИК</Link>
          </li> 
          <li>
          <Link to="/auth">Авторизация</Link>
          </li> 
          <li>
          <Link to="/2"> ХУДОЖНИК </Link>
          </li> 
          <li>
          <Link to="/personalarea"> Личный кабинет</Link>
          </li>
        </div>
        <div className='signIn'>jhxsdfgwsderftgyhhjkjhg</div>
      </div>
  );
}

