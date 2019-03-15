"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _user = _interopRequireDefault(require("./user.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.route('/:id').get(_user.default.getOne).put(_user.default.updateOne);
var _default = router;
exports.default = _default;