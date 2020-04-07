const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, unique: true, required: true },
    author: { type: String, unique: true, required: true },
    image: { type: String },
    read: { type: Boolean, default: false }, 
    ISBN: { type: String, unique: true, required: true }
  });
  
  const Book = mongoose.model("Book", bookSchema);
  
  module.exports = Book;