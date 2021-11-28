import React,{ useEffect, useState} from 'react'
import {Form,Button} from 'react-bootstrap';
import "./Register.css";


const Register = () => {
 

    return (
        <div className="register">
        <h1>Register</h1>
        <Form className="form">
        <Form.Group className="mb-3" >
   <Form.Label>Name</Form.Label>
            <Form.Control
      type="name"
                                id="name_field"
                                className="form-control"
                                name='name'
                                  />
 </Form.Group>
       
 <Form.Group className="mb-3" controlId="formBasicEmail">
   <Form.Label>Email address</Form.Label>
            <Form.Control
                type="email"
                                id="email_field"
                                className="form-control"
                                name='email'
                               
            />
   <Form.Text className="text-muted">
     We'll never share your email with anyone else.
   </Form.Text>
 </Form.Group>

 <Form.Group className="mb-3" controlId="formBasicPassword">
   <Form.Label>Password</Form.Label>
            <Form.Control
     type="password"
                                id="password_field"
                                className="form-control"
                                name='password'
                               
            />
 </Form.Group>

          <Button variant="primary" type="submit"
            id="register_button"
                            type="submit"
                            className="btn btn-block py-3"
                         
          >
   Submit
 </Button>
</Form>
       </div>
    )
}

export default Register
