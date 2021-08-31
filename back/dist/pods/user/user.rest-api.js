"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userApi = void 0;

var _express = require("express");

var _dals = require("../../dals");

var _user = require("./user.mappers");

const userApi = (0, _express.Router)();
exports.userApi = userApi;
userApi.get('/', async (req, res, next) => {
  try {
    const user = await _dals.userRepository.getUserById(req.userSession.id);
    res.send((0, _user.mapUserFromModelToApi)(user));
  } catch (error) {
    next(error);
  }
});