"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decript = exports.cript = void 0;
var crypto_1 = __importDefault(require("crypto"));
function cript(data) {
    return crypto_1.default.createHmac('sha256', process.env.APP_SECRET)
        .update(data)
        .digest('hex');
}
exports.cript = cript;
function decript(data) {
    return crypto_1.default.createHmac('sha256', process.env.APP_SECRET)
        .update(data)
        .digest('hex');
}
exports.decript = decript;
