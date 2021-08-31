"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapBookListFromApiToModel = exports.mapBookFromApiToModel = exports.mapBookListFromModelToApi = exports.mapBookFromModelToApi = void 0;

var _mongodb = require("mongodb");

const mapBookFromModelToApi = book => ({
  id: book._id.toHexString(),
  title: book.title,
  releaseDate: book.releaseDate.toISOString(),
  author: book.author
});

exports.mapBookFromModelToApi = mapBookFromModelToApi;

const mapBookListFromModelToApi = bookList => bookList.map(mapBookFromModelToApi);

exports.mapBookListFromModelToApi = mapBookListFromModelToApi;

const mapBookFromApiToModel = book => ({
  _id: new _mongodb.ObjectId(book.id),
  title: book.title,
  releaseDate: new Date(book.releaseDate),
  author: book.author
});

exports.mapBookFromApiToModel = mapBookFromApiToModel;

const mapBookListFromApiToModel = bookList => Array.isArray(bookList) ? bookList.map(mapBookFromApiToModel) : [];

exports.mapBookListFromApiToModel = mapBookListFromApiToModel;