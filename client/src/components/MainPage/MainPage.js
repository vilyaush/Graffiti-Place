import React from 'react';
import { Link } from 'react-router-dom';

export default function MainPage() {
  return (
    <div className="mainPage">
      <div className="yellowBall">
        <div className="iSearch" />
        <div className="box">
          <button className="button-home"><Link to="/ihavewall"> СТЕНУ </Link></button>
          <button className="button-home"><Link to="/ihavepaint"> ХУДОЖНИКА </Link></button>
        </div>
        <div className="ballon" />
      </div>
    </div>

  );
}
