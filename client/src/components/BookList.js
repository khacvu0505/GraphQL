import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BookDetails from "./BookDetails";
import { useQuery } from "@apollo/client";
import { getBooks } from "graphql-client/queries";

const BookList = () => {
  const [bookSelected, setBookSelected] = useState(null);

  const { loading, error, data } = useQuery(getBooks);
  if (loading) return <p>Loading books ...</p>;
  if (error) return <p>Error loading books!</p>;

  return (
    <>
      <Row>
        <Col xs={7}>
          <Row>
            {data.books.map((book) => (
              <Col xs={4} key={book.id}>
                <Card
                  border="info"
                  text="info"
                  className="text-center shadow"
                  onClick={() => setBookSelected(book.id)}
                >
                  <Card.Body>{book.name}</Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
        <Col xs={5}>
          <BookDetails bookId={bookSelected} />
        </Col>
      </Row>
    </>
  );
};

export default BookList;
