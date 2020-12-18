import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../shared/Header';

const Home = () => {
  return (
    <>
      <Header title="Book Store">
        
        <p>
          Book is the best friend of <strong>Human.</strong>
        </p>
      </Header>

      <Container>
        <hr/>

       

        <p>This application can let user add books to the books library after getting the profile created.</p>
      </Container>
    </>
  );
}
 
export default Home;