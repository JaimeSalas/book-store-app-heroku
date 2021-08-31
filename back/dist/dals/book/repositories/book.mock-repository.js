"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockRepository = void 0;

var _mongodb = require("mongodb");

var _mockData = require("../../mock-data");

const insertBook = book => {
  const _id = new _mongodb.ObjectId();

  const newBook = { ...book,
    _id
  };
  _mockData.db.books = [..._mockData.db.books, newBook];
  return newBook;
};

const updateBook = book => {
  _mockData.db.books = _mockData.db.books.map(b => b._id.toHexString() === book._id.toHexString() ? { ...b,
    ...book
  } : b);
  return book;
};

const mockRepository = {
  getBookList: async () => _mockData.db.books,
  getBook: async id => _mockData.db.books.find(b => b._id.toHexString() === id),
  saveBook: async book => _mockData.db.books.some(b => b._id.toHexString() === book._id.toHexString()) ? updateBook(book) : insertBook(book),
  deleteBook: async id => {
    _mockData.db.books = _mockData.db.books.filter(b => b._id.toHexString() !== id);
    return true;
  }
};
exports.mockRepository = mockRepository;