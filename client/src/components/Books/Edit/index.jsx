import Axios from "axios";
import React, { useState, useContext } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../Authentication/UserProvider";
import { Container } from "react-bootstrap";
import Header from "../../shared/Header";
import BookForm from "../BookForm";
import { GlobalStoreContext } from "../../shared/Globals";

const Edit = () => {
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
      <Header title="Edit your profile!" />

      <Container>
        <p>
          The content is editable under
          <strong>/src/components/Books/Edit/index.jsx</strong>
        </p>

        <BookForm
          preloadData={userDetails}
          endpoint="books/update"
          buttonLabel="Update"
        />
      </Container>
    </>
  ) : null;
};

export default Edit;
