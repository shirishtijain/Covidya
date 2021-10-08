import React from 'react'
import {Form,Button} from 'react-bootstrap';
import "./Register.css";

const Register = () => {
    return (
        <div className="register">
        <h1>Register</h1>
        <Form className="form">
        <Form.Group className="mb-3" >
   <Form.Label>Name</Form.Label>
   <Form.Control type="text" placeholder="Enter name" />
 </Form.Group>
       
 <Form.Group className="mb-3" controlId="formBasicEmail">
   <Form.Label>Email address</Form.Label>
   <Form.Control type="email" placeholder="Enter email" />
   <Form.Text className="text-muted">
     We'll never share your email with anyone else.
   </Form.Text>
 </Form.Group>

 <Form.Group className="mb-3" controlId="formBasicPassword">
   <Form.Label>Password</Form.Label>
   <Form.Control type="password" placeholder="Password" />
 </Form.Group>
 <Form.Group className="mb-3" controlId="formBasicCheckbox">
   <Form.Check type="checkbox" label="Check me out" />
 </Form.Group>
 <Button variant="primary" type="submit">
   Submit
 </Button>
</Form>
       </div>
    )
}

export default Register
