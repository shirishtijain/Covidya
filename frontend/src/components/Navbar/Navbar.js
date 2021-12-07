import React, { useState,useEffect }from 'react'
import { Navbar, Container, Nav ,Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { logout, clearErrors } from "../../actions/userActions";
import { useHistory } from "react-router-dom";
function NavbarMain({isAuthenticated,logout_2,login_2}) {
    // const { isAuthenticated ,user} = useSelector(state => state.auth);
    
    let history= useHistory();
    const dispatch = useDispatch();
  const handleLogout = (e) => {
    
    logout_2();
    dispatch(logout());

   
    
    console.log(isAuthenticated);
    history.push("/login");
     
      
  }

    return (

        <Navbar bg="primary" variant="dark">
        <Container>
        <Navbar.Brand href="../AboutUs/aboutUs.html">CoVidya</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="../AboutUs/aboutUs.html">Home</Nav.Link>
          <Nav.Link href="/data">Dashboard</Nav.Link>
          <Nav.Link href="/map">Map</Nav.Link>
          <Nav.Link href="/resources">Resources</Nav.Link>
          <Nav.Link href="/guidelines">Guidelines</Nav.Link>
                    {/* {isAuthenticated ? 
                        <>
                        <Nav.Link href="/login">Login</Nav.Link>  
          <Nav.Link href="/register">Register</Nav.Link>
          </>
                        
                     : (
                            <>
                            <Button onClick={handleLogout}>Logout</Button>  
                     </>       
                            
        )} */}
            
        <Nav className="ml-auto">
  {!isAuthenticated && (  <Nav.Link href="/login">Login</Nav.Link>  )}
  {!isAuthenticated && (   <Nav.Link href="/register">Register</Nav.Link>)}
</Nav>
            



        </Nav>
        </Container>
        {isAuthenticated && (<Button onClick={handleLogout} className="btn btn-light mr-5">Logout</Button>  )}

      </Navbar>
  
    )
}

export default NavbarMain;
