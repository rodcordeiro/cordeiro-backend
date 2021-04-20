"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require('cors');
var dotenv = require('dotenv');
var corsOptions = {
    "origin": true,
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "optionsSuccessStatus": 204
};
dotenv.config();
var app = express();
var routes = require('./routes/routes');
app.use(express.json());
app.use(cors(corsOptions));
app.use(routes);
exports.default = app;
