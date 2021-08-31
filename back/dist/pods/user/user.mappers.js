"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapUserFromModelToApi = void 0;

const mapUserFromModelToApi = user => ({
  email: user.email,
  role: user.role
});

exports.mapUserFromModelToApi = mapUserFromModelToApi;