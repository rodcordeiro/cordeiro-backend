"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = exports.http = void 0;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var routes_1 = __importDefault(require("./routes/routes"));
var http_1 = require("http");
var socket_io_1 = require("socket.io");
var corsOptions = {
    "origin": true,
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "optionsSuccessStatus": 204
};
var app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default(corsOptions));
app.use(routes_1.default);
var http = http_1.createServer(app);
exports.http = http;
var io = new socket_io_1.Server(http, {
    cors: {
        "origin": true,
        "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
        "optionsSuccessStatus": 204
    }
});
exports.io = io;
