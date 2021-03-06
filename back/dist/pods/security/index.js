"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _security = require("./security.rest-api");

Object.keys(_security).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _security[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _security[key];
    }
  });
});

var _security2 = require("./security.middlewares");

Object.keys(_security2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _security2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _security2[key];
    }
  });
});