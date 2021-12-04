import React,{useState,useEffect,Fragment} from 'react'
import { Form, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import "./Login.css";
import Loader from './layout/Loader';


import { useDispatch,useSelector } from 'react-redux';
import { login, clearErrors } from "../actions/userActions";




const Login = ({history}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  const dispatch = useDispatch();


  const { isAuthenticated, error, loading } = useSelector(state => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/resorces');
    }
    if (error) {
   
      dispatch(clearErrors());
    }
  },[dispatch,isAuthenticated,error,history])
   
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  }

  
  return (

    <Fragment>
      {loading?<Loader/>:(
        <div className="login">
         <h1>Login</h1>
         <Form className="form"  onSubmit={submitHandler}>
        
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
          <Form.Control
             type="email"
                                        id="email_field"
                                        className="form-control"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
    
                
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
                                        value={password}
                onChange={(e)=>setPassword(e.target.value)}
                
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
      )}
      </Fragment>
       
    )
}

export default Login
