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
exports.UserService = void 0;
const connection_1 = __importDefault(require("../database/connection"));
const uuid_1 = require("uuid");
const crypto_1 = require("../tools/crypto");
const jwt_1 = __importDefault(require("../middlewares/jwt"));
class UserService {
    create_user(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, email, password } = data;
            const id = uuid_1.v4();
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const user = yield connection_1.default('users')
                        .select("*")
                        .where("email", email)
                        .orWhere("username", username)
                        .first()
                        .then(response => {
                        return response;
                    });
                    if (user) {
                        reject("usuário já cadastrado");
                        throw new Error("Invalid user");
                    }
                    ;
                    yield connection_1.default('users')
                        .insert({
                        id,
                        username,
                        email,
                        password
                    })
                        .then(response => {
                        resolve({
                            id,
                            username,
                            email
                        });
                    });
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    list_users() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                yield connection_1.default('users')
                    .select("*")
                    .then((response) => {
                    resolve(response);
                })
                    .catch(err => {
                    reject(err);
                });
            }));
        });
    }
    update_user(data) {
        return __awaiter(this, void 0, void 0, function* () {
            let { id, username, email, password } = data;
            if (password)
                password = crypto_1.cript(password);
            const updated_at = new Date().toISOString();
            return yield connection_1.default('users')
                .update({ username, email, password, updated_at })
                .where("id", id)
                .then(response => {
                return {
                    message: "success",
                    data: response
                };
            })
                .catch(err => {
                return {
                    message: "failed",
                    data: err
                };
            });
        });
    }
    login_email(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const user = yield connection_1.default('users')
                        .select("*")
                        .where("email", email)
                        .first()
                        .then(response => {
                        return response;
                    })
                        .catch(err => {
                        return false;
                    });
                    if (!user || user.email !== email || user.password !== password) {
                        reject("Invalid email or password");
                    }
                    let token = jwt_1.default.signin(user.id);
                    resolve({
                        id: user.id, token
                    });
                }
                catch (e) {
                    reject(e);
                }
            }));
        });
    }
    login_username(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const user = yield connection_1.default('users')
                        .select("*")
                        .where("username", username)
                        .first()
                        .then(response => {
                        return response;
                    })
                        .catch(err => {
                        return false;
                    });
                    if (!user || user.username !== username || user.password !== password) {
                        reject("Invalid username or password");
                    }
                    let token = jwt_1.default.signin(user.id);
                    resolve({
                        id: user.id, token
                    });
                }
                catch (e) {
                    reject(e);
                }
            }));
        });
    }
    delete_user(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const user = yield connection_1.default('users')
                        .where("id", id)
                        .delete()
                        .then(response => {
                        resolve(response);
                    })
                        .catch(error => {
                        reject({
                            error
                        });
                    });
                }
                catch (e) {
                    reject(e);
                }
            }));
        });
    }
    find_user_by_email(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const user = yield connection_1.default('users')
                        .select("*")
                        .where("email", email)
                        .first()
                        .then(response => {
                        resolve({
                            id: response.id, email
                        });
                    })
                        .catch(error => {
                        reject(error);
                    });
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
}
exports.UserService = UserService;
