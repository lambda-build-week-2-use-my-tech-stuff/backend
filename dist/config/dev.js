"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;

require('dotenv').config();

const config = {
  secrets: {
    jwt: `${process.env.SECRET}`
  },
  dbUrl: `${process.env.DB_CONFIG}`
};
exports.config = config;