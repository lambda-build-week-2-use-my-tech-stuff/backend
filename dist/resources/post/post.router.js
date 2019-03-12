"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _post = _interopRequireDefault(require("./post.controller"));

var _post2 = require("./post.model");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)(); // /api/post

router.route('/').get(async (req, res) => {
  try {
    const docs = await _post2.Post.find({}).lean().exec();
    res.status(200).json({
      data: docs
    });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
}).post(_post.default.createOne); // /api/post/:id

router.route('/:id').get(_post.default.getOne).put(_post.default.updateOne).put(_post.default.updateOne).delete(_post.default.removeOne);
var _default = router;
exports.default = _default;