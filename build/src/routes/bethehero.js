"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jwt_1 = __importDefault(require("../Services/jwt"));
var express_1 = require("express");
var bth_ongsController_1 = __importDefault(require("../controllers/bth_ongsController"));
var bth_routes = express_1.Router();
var bth_ong_Controller = new bth_ongsController_1.default();
bth_routes.get('/ongs', bth_ong_Controller.index);
bth_routes.post('/ongs', jwt_1.default.verify, bth_ong_Controller.create);
exports.default = (bth_routes);
