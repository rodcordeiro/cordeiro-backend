"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var knex = require('knex');
var configuration = require('../../knexfile');
var config = process.env.NODE_ENV == 'production' ? configuration.production : configuration.development;
var connection = knex(config);
exports.default = connection;
