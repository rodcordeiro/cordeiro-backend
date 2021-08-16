"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
const knexfile_1 = __importDefault(require("../../knexfile"));
const config = process.env.NODE_ENV == 'production' ? knexfile_1.default.production : knexfile_1.default.development;
const connection = knex_1.default(config);
exports.default = connection;
