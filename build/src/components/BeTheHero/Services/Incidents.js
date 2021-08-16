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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentServices = void 0;
const connection_1 = __importDefault(require("../../../database/connection"));
class IncidentServices {
    list_incidents() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                yield connection_1.default('bth_incidents')
                    .select('*')
                    .then(response => {
                    resolve(response);
                })
                    .catch(err => {
                    reject(err);
                });
            }));
        });
    }
    list_incidents_with_pagination(page) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                const incidents = yield connection_1.default('bth_incidents')
                    .join('bth_ongs', 'bth_ongs.id', '=', 'bth_incidents.ong_id')
                    .limit(5)
                    .offset((page - 1) * 5)
                    .select([
                    'bth_incidents.*',
                    'bth_ongs.name',
                    'bth_ongs.email',
                    'bth_ongs.whatsapp',
                    'bth_ongs.city',
                    'bth_ongs.uf'
                ])
                    .then(response => {
                    resolve(response);
                })
                    .catch(err => {
                    reject(err);
                });
            }));
        });
    }
    count_incidents() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                yield connection_1.default('bth_incidents')
                    .count('id')
                    .then(response => {
                    resolve(response);
                })
                    .catch(err => {
                    reject(err);
                });
            }));
        });
    }
    list_profile_incidents(ong_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                yield connection_1.default('bth_incidents')
                    .select('*')
                    .where('ong_id', ong_id)
                    .then(response => {
                    resolve(response);
                })
                    .catch(err => {
                    reject(err);
                });
            }));
        });
    }
    create_new_incident(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                const { title, description, value, ong_id } = data;
                const [id] = yield connection_1.default('bth_incidents')
                    .insert({
                    title, description, value, ong_id
                })
                    .then(response => {
                    return response;
                })
                    .catch(err => {
                    reject(err);
                });
                resolve(id);
            }));
        });
    }
    delete_incident(id, ong_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    yield connection_1.default('bth_incidents')
                        .where("id", id)
                        .andWhere("ong_id", ong_id)
                        .delete()
                        .then(response => {
                        resolve(response);
                    })
                        .catch(err => {
                        reject(err);
                    });
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
}
exports.IncidentServices = IncidentServices;
