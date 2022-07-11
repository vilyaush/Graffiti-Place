import React from 'react'
import { Link } from 'react-router-dom'
// import { Container } from 'react-bootstrap/Container';


export default function MainPage() {
  return (
    <div className='mainPage'>
      <div className= 'yellowBall'>
      <div className='iSearch'/>
      <div className='box'>
      <button className='button'><Link to="/ihavewall"> СТЕНУ </Link></button>
      <button className='button'><Link to="/ihavepaint"> ХУДОЖНИКА </Link></button>
      </div>
      <div className= 'ballon'>

      </div>
      </div>
      </div>


  )
}
