"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _crud = require("../../utils/crud");

var _post = require("./post.model");

var _default = (0, _crud.crudControllers)(_post.Post);

exports.default = _default;