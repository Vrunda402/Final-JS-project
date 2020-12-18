import React, { useEffect, useContext, useState } from "react";
import Axios from "axios";
import { useHistory, Link } from "react-router-dom";
import { GlobalStoreContext } from "../shared/Globals";
import { NotificationContext } from "../shared/Notifications";
import { Container, Table } from "react-bootstrap";
import Header from "../shared/Header";

const Books = () => {
  const { globalStore } = useContext(GlobalStoreContext);
  const [books, setBooks] = useState([]);
  const { setNotification } = useContext(NotificationContext);
  const his = useHistory();

  function getList() {
    Axios.get(`${globalStore.REACT_APP_ENDPOINT}/books`)
      .then(({ data }) => setBooks(data))
      .catch((error) => {
        console.error(error.message);

        setNotification({
          type: "danger",
          message: "Couldn't access the books at this time.",
        });
      });
  }

  useEffect(() => {
    getList();
  }, [globalStore, setNotification]);

  function del(id) {
    // eslint-disable-next-line no-restricted-globals
    if (confirm(`Do you want to delete this book`)) {
      Axios.post(`${globalStore.REACT_APP_ENDPOINT}/books/destroy`, {
        _id: id,
        secret_token: localStorage.getItem("token"),
      })
        .then(({ data }) => {
          getList();
        })
        .catch((error) => {
          console.error(error.message);

          setNotification({
            type: "danger",
            message: "Couldn't access the books at this time.",
          });
        });
    }
  }
  function edit(id) {
    his.push("/booksProfile/edit/" + id);
  }

  return books ? (
    <>
      <Header  title="Book Library">
        

        
      </Header>

      <Container className="my-3">
        <Table>
          <thead>
            <tr>
              <th>Publisher Number</th>
              <th>Book Name</th>
              <th>Book Introduction</th>
              <th>Book Price</th>
              <th>Book Author</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {books.map(
              (
                { _id, name, publisherNumber, introduction, price, author },
                i
              ) => (
                <tr key={i}>
                  <td>{publisherNumber}</td>
                  <td>
                    <Link to={"/booksProfile/" + _id}>{name}</Link>
                  </td>
                  <td>{introduction}</td>
                  <td>{price}</td>
                  <td>{author}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => edit(_id)}
                    >
                      edit
                    </button>
                    &nbsp;
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => del(_id)}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </Table>
      </Container>
    </>
  ) : null;
};

export default Books;
