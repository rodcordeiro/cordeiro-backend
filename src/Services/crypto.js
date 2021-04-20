"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crypto = require("crypto");
function cript(data) {
    return crypto.createHmac('sha256', process.env.APP_SECRET)
        .update(data)
        .digest('hex');
}
exports.default = cript;
