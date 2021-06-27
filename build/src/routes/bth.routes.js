"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jwt_1 = __importDefault(require("../tools/jwt"));
var express_1 = require("express");
var OngController_1 = require("../Controllers/BTH/OngController");
var IncidentsController_1 = require("../Controllers/BTH/IncidentsController");
var bthEndpoints = express_1.Router();
var bthOngs = new OngController_1.bthOngController();
var bthIncidents = new IncidentsController_1.bthIncidentController();
bthEndpoints.get('/bth/ongs', bthOngs.index);
bthEndpoints.post('/bth/ongs', bthOngs.create);
bthEndpoints.post('/bth/session', bthOngs.authenticate);
bthEndpoints.get('/bth/profile', jwt_1.default.validate, bthIncidents.profile_incidents);
bthEndpoints.post('/bth/incidents', jwt_1.default.validate, bthIncidents.create_incident);
bthEndpoints.delete('/bth/incidents/:id', jwt_1.default.validate, bthIncidents.delete_incident);
exports.default = bthEndpoints;
