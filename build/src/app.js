"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
var routes_1 = __importDefault(require("./routes/routes"));
var corsOptions = {
    "origin": true,
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "optionsSuccessStatus": 204
};
dotenv_1.default.config();
var app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default(corsOptions));
app.use(routes_1.default);
exports.default = app;
