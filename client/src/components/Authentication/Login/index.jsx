import React from 'react';
import { Container } from 'react-bootstrap';

import Header from '../../shared/Header';
import LoginForm from './LoginForm';

const Login = () => {
  return (
    <>
      <Header title="Login Here">
       
      </Header>
      
      <Container>
        <p>
        <strong>  Enter login information</strong>
        </p>
        
        <LoginForm/>
      </Container>
    </>
  );
}
 
export default Login;