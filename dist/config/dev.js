"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;

require('dotenv').config();

const config = {
  secrets: {
    jwt: 'learneverything'
  },
  dbUrl: `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0-rrbed.mongodb.net/use-tech-stuff?retryWrites=true`
};
exports.config = config;