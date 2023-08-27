const Book = require("../model/Book");
const Author = require("../model/Author");

const mongoDataMethods = {
  getAllBooks: async (condition = null) =>
    condition === null ? await Book.find() : await Book.find(condition),
  getBookById: async (id) => {
    return await Book.findById(id);
  },
  createBook: async (args) => {
    const newBook = new Book(args);
    return await newBook.save();
  },
  getAllAuthor: async () => await Author.find(),
  getAuthorById: async (id) => {
    return await Author.findById(id);
  },
  createAuthor: async (args) => {
    const newAuthor = new Author(args);
    return await newAuthor.save();
  },
};

module.exports = mongoDataMethods;
