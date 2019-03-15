"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _post = _interopRequireDefault(require("./post.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)(); // /api/post

router.route('/').get(_post.default.getMany).post(_post.default.createOne); // /api/post/:id

router.route('/:id').get(_post.default.getOne).put(_post.default.updateOne).delete(_post.default.removeOne);
var _default = router;
exports.default = _default;