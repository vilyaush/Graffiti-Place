import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



export default function MyNavbar() {
  return (
      <div className='navBar'>
        <div className='mainLabel'>
        </div>
        <div className='headNav'>  
        <li>        
          <Link to="/">Главная</Link>
          </li>  
          <li>
          <Link to="/1">ЗАКАЗЧИК</Link>
          </li> 
          <li>
          <Link to="/auth">Авторизация</Link>
          </li> 
          <li>
          <Link to="/2"> ХУДОЖНИК </Link>
          </li> <li>
          <Link to="/ihavepaint"> КРАСКИ </Link>
          </li> <li>
          <Link to="/ihavewall"> СТЕНА </Link>

          </li> 

          <Link to="/personalarea"> Личный кабинет</Link>

        </div>
        <div className='signIn'>jhxsdfghjkjhg</div>
      </div>
  );
}

