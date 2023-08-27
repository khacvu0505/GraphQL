import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { getAuthors } from "graphql-client/queries";
import { addSingleAuthor } from "graphql-client/mutations";
import { useMutation } from "@apollo/client";

const AuthorForm = () => {
  const [newAuthor, setNewAuthor] = useState({
    name: "",
    age: "",
  });
  return (
    <Form>
      <Form.Group className="invisible">
        <Form.Control />
      </Form.Group>
      <Form.Group>
        <Form.Control type="text" placeholder="Author name"></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Control type="number" placeholder="Author age"></Form.Control>
      </Form.Group>
      <div className="w-100 text-right">
        <Button variant="info" type="submit">
          Add Author
        </Button>
      </div>
    </Form>
  );
};

export default AuthorForm;
