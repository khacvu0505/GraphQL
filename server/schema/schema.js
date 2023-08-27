const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    id: ID
    name: String
    genre: String
    author: Author
  }

  type Author {
    # Có ! là k được null
    id: ID!
    name: String
    age: Int
    books: [Book]
  }

  # ROOT TYPE: loại gốc (tên type là "Query" và k thay đổi được)
  type Query {
    books: [Book]
    book(id: ID!): Book
    authors: [Author]
    author(id: ID!): Author
  }

  type Mutation {
    createAuthor(name: String, age: Int): Author
    createBook(name: String, genre: String, authorId: ID!): Book
  }
`;

module.exports = typeDefs;
