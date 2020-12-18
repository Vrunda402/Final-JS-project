import React from 'react';
import { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import Axios from 'axios';
import { UserContext } from '../../Authentication/UserProvider';
import { GlobalStoreContext } from '../../shared/Globals';
import { NotificationContext } from '../../shared/Notifications';
import { Redirect } from 'react-router-dom';

const UserForm = ({ endpoint, preloadData = {}, buttonLabel }) => {
  const { globalStore } = useContext(GlobalStoreContext);    
  const { user, setUser } = useContext(UserContext);
  const { setNotification } = useContext(NotificationContext);

  const [inputs, setInputs] = useState({
    ...preloadData,
    emailConfirmation: (preloadData && preloadData.email)
  });
  const [redirect, setRedirect] = useState(false);
  
  const handleChange = event => {
    event.persist();
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (inputs && inputs.publisherNumber) {
      Axios.post(`${globalStore.REACT_APP_ENDPOINT}/${endpoint}`, {
        ...inputs,
        secret_token: user && user.token,
      })
        .then(({ data }) => {

          setNotification({
            type: "success",
            message: "This action was performed successfully.",
          });

          setRedirect(true);
        })
        .catch((error) => {
          console.error(error.message);

          setNotification({
            type: "danger",
            message: `There was an issue performing this action: ${error.message}`,
          });
        });
    }
  };


  return (
    redirect ? (
      <Redirect to="/books"/>
    ) : (
      <Form onSubmit={handleSubmit}>
       

        <Form.Group>
          <Form.Label>Publisher Number</Form.Label>
          <Form.Control
            name="publisherNumber"
            onChange={handleChange}
            required
            defaultValue={inputs.publisherNumber}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            onChange={handleChange}
            required
            defaultValue={inputs.name}
          />
        </Form.Group>
  
        <Form.Group>
          <Form.Label>Introduction</Form.Label>
          <Form.Control
            name="introduction"
            onChange={handleChange}
            required
            defaultValue={inputs.introduction}
          />
        </Form.Group>
  
        <Form.Group>
          <Form.Label>Price</Form.Label>
          <Form.Control
            name="price"
            onChange={handleChange}
            required
            defaultValue={inputs.price}
          />
        </Form.Group>
  
        <Form.Group>
          <Form.Label>Author</Form.Label>
          <Form.Control
            name="author"
            onChange={handleChange}
            required
            defaultValue={inputs.author}
          />
        </Form.Group>


  
        <Form.Group>
          <Button type="submit">{ buttonLabel || "Submit" }</Button>
        </Form.Group>
      </Form>
    )
  );
}
 
export default UserForm;