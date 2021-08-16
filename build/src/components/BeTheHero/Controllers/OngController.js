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
exports.bthOngController = void 0;
const crypto_1 = require("../../../tools/crypto");
const User_1 = require("../../../Services/User");
const Ongs_1 = require("../Services/Ongs");
class bthOngController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const Ong = new Ongs_1.OngServices();
            return yield Ong.get_ongs()
                .then(response => {
                return res.status(200).json(response);
            })
                .catch(err => {
                return res.status(400).json(err);
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const User = new User_1.UserService();
            const Ong = new Ongs_1.OngServices();
            let { name, email, password, number, city, uf } = req.body;
            password = crypto_1.cript(password);
            const user_id = yield User.create_user({
                username: name,
                email,
                password
            })
                .then((response) => {
                return response.id;
            })
                .catch(err => {
                res.status(400).json(err);
                throw new Error(err);
            });
            const ong = yield Ong.create_ong({ name, email, number, city, uf, user_id })
                .then((response) => {
                return res.status(200).json(response);
            })
                .catch(err => {
                return res.status(400).json(err);
            });
        });
    }
    authenticate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const User = new User_1.UserService();
            const Ong = new Ongs_1.OngServices();
            let { email, password } = req.body;
            password = crypto_1.cript(password);
            const user = yield User.login_email(email, password)
                .then((response) => {
                return response;
            })
                .catch(err => {
                res.status(400).json(err);
                throw new Error("Invalid email or password");
            });
            const ong = yield Ong.get_user_ongs(user.id)
                .then(response => {
                return res.status(200).json({ Ong: response, user });
            })
                .catch(err => {
                return res.status(400).json({ err });
            });
        });
    }
}
exports.bthOngController = bthOngController;
