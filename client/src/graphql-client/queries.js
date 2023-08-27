import { gql } from "@apollo/client";

const getBooks = gql`
  query getBooksQuery {
    books {
      id
      name
    }
  }
`;

const getSingleBooks = gql`
  query getSingleBookQuery($id: ID!) {
    book(id: $id) {
      id
      name
      genre
      author {
        name
        age
        books {
          id
          name
          genre
        }
      }
    }
  }
`;

const getAuthors = gql`
  query getAuthorsQuery {
    authors {
      id
      name
      age
    }
  }
`;

export { getBooks, getSingleBooks, getAuthors };
