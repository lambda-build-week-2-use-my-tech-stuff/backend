"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _user = require("./user.model");

var _crud = require("../../utils/crud");

// export const me = async (req, res) => {
//   const user = await User.findById(req.params.id)
//     .lean()
//     .exec()
//   res.status(200).json({ data: user })
// }
// export const updateMe = async (req, res) => {
//   try {
//     const user = await User.findByIdAndUpdate(req.params.id, req.body, {
//       new: true
//     })
//       .lean()
//       .exec()
//     res.status(200).json({ data: user })
//   } catch (e) {
//     console.error(e)
//     res.status(400).end()
//   }
// }
var _default = (0, _crud.crudControllers)(_user.User);

exports.default = _default;