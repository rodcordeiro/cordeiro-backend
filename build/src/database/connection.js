"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var knex_1 = __importDefault(require("knex"));
var knexfile_1 = __importDefault(require("../../knexfile"));
var config = process.env.NODE_ENV == 'production' ? knexfile_1.default.production : knexfile_1.default.development;
var connection = knex_1.default(config);
exports.default = connection;
