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
exports.UserController = void 0;
const crypto_1 = require("../tools/crypto");
const User_1 = require("../Services/User");
class UserController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const services = new User_1.UserService();
            const users = yield services.list_users()
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
            const services = new User_1.UserService();
            let { username, email, password } = req.body;
            password = crypto_1.cript(password);
            const user = yield services.create_user({ username, email, password })
                .then((response) => {
                return res.status(200).json(response);
            })
                .catch(err => {
                return res.status(400).json(err);
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const services = new User_1.UserService();
            const id = req.params.id ? req.params.id : req.headers.id;
            const { username, email, password } = req.body;
            const user = yield services.update_user({ id, username, email, password });
            return res.status(200).json(user);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const services = new User_1.UserService();
            const response = yield services.delete_user(req.params.id)
                .then(response => {
                if (response !== 0)
                    return res.status(201).json({ response });
                return res.status(400).json({ error: "Usuário não encontrado" });
            })
                .catch(error => {
                return res.status(400).json({ error });
            });
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const services = new User_1.UserService();
            let { username, email, password } = req.body;
            password = crypto_1.cript(password);
            let user;
            if (!username) {
                user = yield services.login_email(email, password)
                    .then(response => {
                    return res.status(200).json(response);
                })
                    .catch(error => {
                    return res.status(400).json({ error });
                });
            }
            else {
                user = yield services.login_username(username, password)
                    .then(response => {
                    return res.status(200).json(response);
                })
                    .catch(error => {
                    return res.status(400).json({ error });
                });
            }
        });
    }
}
exports.UserController = UserController;
