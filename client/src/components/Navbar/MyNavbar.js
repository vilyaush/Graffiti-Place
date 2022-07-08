import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import '../Navbar/MyNavbar.css'

export default function MyNavbar() {
  return (
    <>

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link className='link' to="/">Home </Link>
            <Link className='link' to="/auth">/Auth</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

