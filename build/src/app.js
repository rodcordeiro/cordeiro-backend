"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = exports.http = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes/routes"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const corsOptions = {
    "origin": true,
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "optionsSuccessStatus": 204
};
const app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default(corsOptions));
app.use(routes_1.default);
const http = http_1.createServer(app);
exports.http = http;
const io = new socket_io_1.Server(http, {
    cors: {
        "origin": true,
        "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
        "optionsSuccessStatus": 204
    }
});
exports.io = io;
