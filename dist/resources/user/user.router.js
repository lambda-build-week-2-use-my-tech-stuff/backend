"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _user = require("./user.controller");

var _user2 = require("./user.model");

const router = (0, _express.Router)();
router.route('/:id').get(async (req, res) => {
  try {
    const docs = await _user2.User.findById(req.params.id).lean().exec();
    res.status(200).json({
      data: docs
    });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
}).put(_user.updateMe);
var _default = router;
exports.default = _default;