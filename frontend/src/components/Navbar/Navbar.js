import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
function NavbarMain() {
    return (

        <Navbar bg="primary" variant="dark">
        <Container>
        <Navbar.Brand href="../AboutUs/aboutUs.html">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="../AboutUs/aboutUs.html">Home</Nav.Link>
          <Nav.Link href="/data">Dashboard</Nav.Link>
          <Nav.Link href="/map">Map</Nav.Link>
          <Nav.Link href="/resources">Resources</Nav.Link>
          <Nav.Link href="/guidelines">Guidelines</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>  
          <Nav.Link href="/register">Register</Nav.Link>

        </Nav>
        </Container>
      </Navbar>
  
    )
}

export default NavbarMain;
