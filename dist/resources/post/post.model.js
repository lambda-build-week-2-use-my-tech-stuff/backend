"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Post = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const postSchema = new _mongoose.default.Schema({
  postTitle: {
    type: String
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  zip: {
    type: String
  },
  price: {
    type: String
  },
  description: {
    type: String
  },
  category: {
    type: String
  },
  createdBy: {
    type: _mongoose.default.SchemaTypes.ObjectId,
    ref: 'user'
  }
}, {
  timestamps: true
});
postSchema.index({
  postTitle: 1,
  state: 1
}, {
  unique: false
});

const Post = _mongoose.default.model('post', postSchema);

exports.Post = Post;