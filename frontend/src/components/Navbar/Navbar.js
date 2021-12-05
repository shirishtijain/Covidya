import React from 'react'
import { Navbar, Container, Nav ,Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { logout, clearErrors } from "../../actions/userActions";

function NavbarMain() {
    const { isAuthenticated } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const handleLogout = (e) => {
     
        dispatch(logout());
      }
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
                    {isAuthenticated ? 
                        <>
                        <Nav.Link href="/login">Login</Nav.Link>  
          <Nav.Link href="/register">Register</Nav.Link>
          </>
                        
                     : (
                            <>
                            <Button href="/logout" onClick={handleLogout}>Logout</Button>  
                     </>       
                            
        )}


        </Nav>
        </Container>
      </Navbar>
  
    )
}

export default NavbarMain;
