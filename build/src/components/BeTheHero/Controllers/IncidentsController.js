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
Object.defineProperty(exports, "__esModule", { value: true });
exports.bthIncidentController = void 0;
const Incidents_1 = require("../Services/Incidents");
class bthIncidentController {
    list_incidents(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const Incidents = new Incidents_1.IncidentServices();
            const { page = 1 } = req.query;
            const [count] = yield Incidents.count_incidents()
                .then(response => {
                return response;
            });
            const incidents = yield Incidents.list_incidents_with_pagination(page)
                .then(response => {
                return res.status(200).header('X-TOTAL-COUNT', count['count']).json(response);
            })
                .catch(err => {
                return res.status(400).json(err);
            });
        });
    }
    profile_incidents(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const Incidents = new Incidents_1.IncidentServices();
            const { ong_id } = req.headers;
            const incidents = yield Incidents.list_profile_incidents(ong_id)
                .then(response => {
                return res.status(200).json(response);
            })
                .catch(err => {
                return res.status(400).json(err);
            });
        });
    }
    create_incident(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const Incidents = new Incidents_1.IncidentServices();
            const { ong_id } = req.headers;
            const { title, description, value } = req.body;
            const incident = yield Incidents.create_new_incident({ title, description, value, ong_id })
                .then(response => {
                return res.status(201).json(response);
            })
                .catch(err => {
                return res.status(400).json(err);
            });
        });
    }
    delete_incident(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const Incidents = new Incidents_1.IncidentServices();
            const { ong_id } = req.headers;
            yield Incidents.delete_incident(req.params.id, ong_id)
                .then(response => {
                return res.status(204).send();
            })
                .catch(err => {
                return res.status(400).json(err);
            });
        });
    }
}
exports.bthIncidentController = bthIncidentController;
