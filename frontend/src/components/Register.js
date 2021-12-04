import React,{useState,useEffect,Fragment} from 'react'
import { Form, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Loader from './layout/Loader';


import { useDispatch,useSelector } from 'react-redux';
import { register, clearErrors } from "../actions/userActions";



import "./Register.css";


const Register = ({ history }) => {
  const [name,setName]= useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  


  
  const dispatch = useDispatch();


  const { isAuthenticated, error, loading } = useSelector(state => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/resources');
    }
    if (error) {
   
      dispatch(clearErrors());
    }
  },[dispatch,isAuthenticated,error,history])
   
  const submitHandler = (e) => {
    e.preventDefault();

  

    dispatch(register(name,email,password))
}

    return (
        <div className="register">
        <h1>Register</h1>
        <Form className="form" onSubmit={submitHandler}>
        <Form.Group className="mb-3" >
   <Form.Label>Name</Form.Label>
            <Form.Control
      type="name"
                                id="name_field"
                                className="form-control"
                                name='name'
                                value={name}
                                onChange={(e)=>setName(e.target.value)}
                                  />
 </Form.Group>
       
 <Form.Group className="mb-3" controlId="formBasicEmail">
   <Form.Label>Email address</Form.Label>
            <Form.Control
                type="email"
                                id="email_field"
                                className="form-control"
                                name='email'
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
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
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                               
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
