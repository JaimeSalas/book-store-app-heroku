"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.paginateBookList = void 0;

const paginateBookList = (bookList, page, pageSize) => {
  let paginatedBookList = [...bookList];

  if (page && pageSize) {
    const startIndex = (page - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, paginatedBookList.length);
    paginatedBookList = paginatedBookList.slice(startIndex, endIndex);
  }

  return paginatedBookList;
};

exports.paginateBookList = paginateBookList;