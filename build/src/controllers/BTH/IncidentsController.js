"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bthIncidentController = void 0;
var Incidents_1 = require("../../Services/BTH/Incidents");
var bthIncidentController = (function () {
    function bthIncidentController() {
    }
    bthIncidentController.prototype.list_incidents = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var Incidents, _a, page, count, incidents;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        Incidents = new Incidents_1.IncidentServices();
                        _a = req.query.page, page = _a === void 0 ? 1 : _a;
                        return [4, Incidents.count_incidents()
                                .then(function (response) {
                                return response;
                            })];
                    case 1:
                        count = (_b.sent())[0];
                        return [4, Incidents.list_incidents_with_pagination(page)
                                .then(function (response) {
                                return res.status(200).header('X-TOTAL-COUNT', count['count']).json(response);
                            })
                                .catch(function (err) {
                                return res.status(400).json(err);
                            })];
                    case 2:
                        incidents = _b.sent();
                        return [2];
                }
            });
        });
    };
    bthIncidentController.prototype.profile_incidents = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var Incidents, ong_id, incidents;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Incidents = new Incidents_1.IncidentServices();
                        ong_id = req.headers.ong_id;
                        return [4, Incidents.list_profile_incidents(ong_id)
                                .then(function (response) {
                                return res.status(200).json(response);
                            })
                                .catch(function (err) {
                                return res.status(400).json(err);
                            })];
                    case 1:
                        incidents = _a.sent();
                        return [2];
                }
            });
        });
    };
    bthIncidentController.prototype.create_incident = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var Incidents, ong_id, _a, title, description, value, incident;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        Incidents = new Incidents_1.IncidentServices();
                        ong_id = req.headers.ong_id;
                        _a = req.body, title = _a.title, description = _a.description, value = _a.value;
                        return [4, Incidents.create_new_incident({ title: title, description: description, value: value, ong_id: ong_id })
                                .then(function (response) {
                                return res.status(201).json(response);
                            })
                                .catch(function (err) {
                                return res.status(400).json(err);
                            })];
                    case 1:
                        incident = _b.sent();
                        return [2];
                }
            });
        });
    };
    bthIncidentController.prototype.delete_incident = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var Incidents, ong_id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Incidents = new Incidents_1.IncidentServices();
                        ong_id = req.headers.ong_id;
                        return [4, Incidents.delete_incident(req.params.id, ong_id)
                                .then(function (response) {
                                return res.status(204).send();
                            })
                                .catch(function (err) {
                                return res.status(400).json(err);
                            })];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    return bthIncidentController;
}());
exports.bthIncidentController = bthIncidentController;
