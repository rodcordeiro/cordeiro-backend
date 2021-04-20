"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var routes = express_1.Router();
var webhooksController_1 = __importDefault(require("../controllers/webhooksController"));
routes.get('/webhooks', function (req, res) {
    console.log('teste');
    return res.status(400).send();
});
routes.post('/webhooks', webhooksController_1.default.create);
routes.get('/webhooks/:origin', webhooksController_1.default.get_webhooks);
exports.default = routes;
