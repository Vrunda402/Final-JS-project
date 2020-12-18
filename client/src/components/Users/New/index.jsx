import React from 'react';
import { Container } from 'react-bootstrap';

import Header from '../../shared/Header';
import UserForm from '../UserForm';

const New = () => {
  return (
    <>
      <Header title="New User Registration">
      
      </Header>
      
      <Container>
        <p>
        <strong>  Provide your Information</strong>
        </p>

        <UserForm endpoint="users"/>
      </Container>
    </>
  );
}
 
export default New;