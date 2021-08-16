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
exports.OngServices = void 0;
const connection_1 = __importDefault(require("../../../database/connection"));
const uuid_1 = require("uuid");
class OngServices {
    get_ongs() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const ongs = yield connection_1.default('bth_ongs')
                        .select("*")
                        .then((response) => {
                        resolve(response);
                    });
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    create_ong(data) {
        return __awaiter(this, void 0, void 0, function* () {
            let { name, email, number, city, uf, user_id } = data;
            const id = uuid_1.v4();
            const whatsapp = "+55" + number;
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const ong = yield connection_1.default('bth_ongs').insert({
                        id,
                        name,
                        email,
                        whatsapp,
                        city,
                        uf,
                        user_id
                    })
                        .then(response => {
                        resolve(response);
                    });
                }
                catch (error) {
                    reject(error);
                }
            }));
        });
    }
    get_user_ongs(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const ong = yield connection_1.default('bth_ongs')
                        .select("*")
                        .where("user_id", user_id)
                        .first()
                        .then(response => {
                        resolve(response);
                    })
                        .catch(e => {
                        reject(e);
                    });
                }
                catch (e) {
                    reject(e);
                }
            }));
        });
    }
}
exports.OngServices = OngServices;
