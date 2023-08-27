const mongoose = require("mongoose");
// const Schema = new mongoose.Schema();
const { Schema } = mongoose;

const AuthorSchema = new Schema({
  name: String,
  age: Number,
});

module.exports = mongoose.model("authors", AuthorSchema);
