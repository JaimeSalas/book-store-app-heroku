"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dbRepository = void 0;

var _mongodb = require("mongodb");

var _book = require("../book.context");

const dbRepository = {
  getBookList: async () => await _book.bookContext.find().lean(),
  getBook: async id => await _book.bookContext.findOne({
    _id: new _mongodb.ObjectId(id)
  }).lean(),
  saveBook: async book => await _book.bookContext.findOneAndUpdate({
    _id: book._id
  }, {
    $set: book
  }, {
    upsert: true,
    new: true
  }).lean(),
  deleteBook: async id => {
    const {
      deletedCount
    } = await _book.bookContext.deleteOne({
      _id: new _mongodb.ObjectId(id)
    });
    return deletedCount === 1;
  }
};
exports.dbRepository = dbRepository;