import React from 'react';
import { Container } from 'react-bootstrap';

import Header from '../../shared/Header';
import BookForm from '../BookForm';

const New = () => {
  return (
    <>
      <Header title="Add Your Book Here..."></Header>
      
      <Container>
        <p>
          Enter book information
        </p>

        <BookForm endpoint="books"/>
      </Container>
    </>
  );
}
 
export default New;