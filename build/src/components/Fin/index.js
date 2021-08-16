"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const routes = express_1.Router();
exports.routes = routes;
routes.get('/', (req, res) => {
    return res.status(200).send("ok");
});
