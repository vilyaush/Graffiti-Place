import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


export default function MyNavbar() {
  return (
    <>

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/auth">Auth</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>

            <Link to="/1"> Create Order </Link>
            <Link to="/2"> Create Painter </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

