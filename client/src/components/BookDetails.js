import React from "react";
import Card from "react-bootstrap/Card";
import { useQuery } from "@apollo/client";
import { getSingleBooks } from "graphql-client/queries";

const BookDetails = ({ bookId }) => {
  const { loading, data, error } = useQuery(getSingleBooks, {
    variables: {
      id: bookId,
    },
    skip: bookId === null,
  });

  if (loading) return <p>Loading book detail ...</p>;
  if (bookId !== null && error) return <p>Error loading books detail!</p>;

  const book = bookId !== null ? data.book : null;
  return (
    <Card bg="info" text="white" className="shadow">
      <Card.Body>
        {book === null ? (
          <Card.Text>Please select a book</Card.Text>
        ) : (
          <>
            <Card.Title>Book: {book.name}</Card.Title>
            <Card.Subtitle>Genre: {book.genre}</Card.Subtitle>
            <p>Author: {book.author.name}</p>
            <p>Age: {book.author.age}</p>
            <p>All books by this author</p>
            <ul>
              {book.author.books.map((item, index) => (
                <li key={index}>
                  Name: {item.name} - Genre: {item.genre}
                </li>
              ))}
            </ul>
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default BookDetails;
