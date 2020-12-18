import Axios from "axios";
import React, { useState, useContext } from "react";
import { useEffect } from "react";
import { UserContext } from "../../Authentication/UserProvider";
import { GlobalStoreContext } from "../../shared/Globals";
import { Container, Media } from "react-bootstrap";
import Header from "../../shared/Header";
import { Link, useParams } from "react-router-dom";

const Show = () => {
  const { user } = useContext(UserContext);
  const { _id } = useParams();
  const { globalStore } = useContext(GlobalStoreContext);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    Axios.get(
      `${globalStore.REACT_APP_ENDPOINT}/books/show?_id=${_id}`
    ).then(({ data }) => setUserDetails(data));
  }, [globalStore, _id]);

  return userDetails ? (
    <>
      <Header title="Book Details">
      </Header>

      <Container>
        <p>
        <strong>About Book</strong>
        </p>

        <Media>
          <img
            src="https://via.placeholder.com/150"
            width={150}
            height={150}
            alt=""
            className="mr-3"
          />
          <Media.Body>
            <h5>{userDetails.name}</h5>
            <p>
              <strong>PublisherNumber:</strong>&nbsp;
              {userDetails.publisherNumber}
            </p>

            <p>
              <strong>Price:</strong>&nbsp;{userDetails.price}
            </p>

            <p>
              <strong>Introduction:</strong>&nbsp;{userDetails.introduction}
            </p>

            <p>
              <strong>Author:</strong>&nbsp;{userDetails.author}
            </p>
          </Media.Body>
        </Media>
      </Container>
    </>
  ) : null;
};

export default Show;
