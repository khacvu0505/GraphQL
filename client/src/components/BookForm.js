import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { getAuthors, getBooks } from "graphql-client/queries";
import { addSingleBook } from "graphql-client/mutations";
import { useQuery, useMutation } from "@apollo/client";

const BookForm = () => {
  // GraphQL Operation
  const { loading, data, error } = useQuery(getAuthors);
  const [addBookMutation, dataMutation] = useMutation(addSingleBook, {
    refetchQueries: [{ query: getBooks }],
  });

  const [newBook, setNewBook] = useState({
    name: "",
    genre: "",
    authorId: "",
  });

  const handleOnChange = (event) => {
    setNewBook({
      ...newBook,
      [event.target.name]: event.target.value,
    });
  };

  const handleAddBook = (event) => {
    event.preventDefault();
    addBookMutation({
      variables: {
        name: newBook.name,
        genre: newBook.genre,
        authorId: newBook.authorId,
      },
    });
    setNewBook({
      name: "",
      genre: "",
      authorId: "",
    });
  };
  return (
    <Form>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Book name"
          name="name"
          onChange={handleOnChange}
          value={newBook.name}
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          name="genre"
          placeholder="Book genre"
          onChange={handleOnChange}
          value={newBook.genre}
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        {loading ? (
          <p>Loading authors ...</p>
        ) : (
          <Form.Control
            as="select"
            name="authorId"
            onChange={handleOnChange}
            value={newBook.authorId}
          >
            <option value="" disabled>
              Select Author
            </option>
            {data.authors.map((author) => (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            ))}
          </Form.Control>
        )}
      </Form.Group>

      <Button variant="info" type="submit" onClick={handleAddBook}>
        Add Book
      </Button>
    </Form>
  );
};

export default BookForm;
