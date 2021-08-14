"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var express_1 = require("express");
var routes = express_1.Router();
exports.routes = routes;
routes.get('/', function (req, res) {
    return res.status(200).send("ok");
});
