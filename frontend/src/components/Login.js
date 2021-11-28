import React,{useState,useEffect} from 'react'
import {Form,Button} from 'react-bootstrap';
import "./Login.css";




const Login = () => {

  
  return (
        <div className="login">
         <h1>Login</h1>
         <Form className="form">
        
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
          <Form.Control
             type="email"
                                        id="email_field"
                                        className="form-control"
                                      
    />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control  type="password"
                                        id="password_field"
                                        className="form-control"
                                        />
  </Form.Group>
  
        <Button variant="primary" type="submit"
         id="login_button"
                                    type="submit"
                                    className="btn btn-block py-3">
    Submit
  </Button>
</Form>
        </div>
    )
}

export default Login
