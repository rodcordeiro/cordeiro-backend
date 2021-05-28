"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var OngController_1 = require("../Controllers/BTH/OngController");
var bthEndpoints = express_1.Router();
var bthOngs = new OngController_1.bthOngController();
//User
bthEndpoints.get('/bth/ongs', bthOngs.index);
exports.default = bthEndpoints;
