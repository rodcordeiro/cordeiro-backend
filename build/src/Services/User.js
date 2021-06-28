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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
var connection_1 = __importDefault(require("../database/connection"));
var uuid_1 = require("uuid");
var crypto_1 = require("../tools/crypto");
var jwt_1 = __importDefault(require("../tools/jwt"));
var UserService = (function () {
    function UserService() {
    }
    UserService.prototype.create_user = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var username, email, password, id;
            var _this = this;
            return __generator(this, function (_a) {
                username = data.username, email = data.email, password = data.password;
                id = uuid_1.v4();
                return [2, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var user, err_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 3, , 4]);
                                    return [4, connection_1.default('users')
                                            .select("*")
                                            .where("email", email)
                                            .orWhere("username", username)
                                            .first()
                                            .then(function (response) {
                                            return response;
                                        })];
                                case 1:
                                    user = _a.sent();
                                    if (user) {
                                        reject("usuário já cadastrado");
                                        throw new Error("Invalid user");
                                    }
                                    ;
                                    return [4, connection_1.default('users')
                                            .insert({
                                            id: id,
                                            username: username,
                                            email: email,
                                            password: password
                                        })
                                            .then(function (response) {
                                            resolve({
                                                id: id,
                                                username: username,
                                                email: email
                                            });
                                        })];
                                case 2:
                                    _a.sent();
                                    return [3, 4];
                                case 3:
                                    err_1 = _a.sent();
                                    reject(err_1);
                                    return [3, 4];
                                case 4: return [2];
                            }
                        });
                    }); })];
            });
        });
    };
    UserService.prototype.list_users = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, connection_1.default('users')
                            .select("*")
                            .then(function (response) {
                            return {
                                message: "success",
                                data: response
                            };
                        })
                            .catch(function (err) {
                            return {
                                message: "failed",
                                data: err
                            };
                        })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    UserService.prototype.update_user = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var id, username, email, password, updated_at;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = data.id, username = data.username, email = data.email, password = data.password;
                        if (password)
                            password = crypto_1.cript(password);
                        updated_at = new Date().toISOString();
                        return [4, connection_1.default('users')
                                .update({ username: username, email: email, password: password, updated_at: updated_at })
                                .where("id", id)
                                .then(function (response) {
                                return {
                                    message: "success",
                                    data: response
                                };
                            })
                                .catch(function (err) {
                                return {
                                    message: "failed",
                                    data: err
                                };
                            })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    UserService.prototype.login_email = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var user, token, e_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4, connection_1.default('users')
                                            .select("*")
                                            .where("email", email)
                                            .first()
                                            .then(function (response) {
                                            return response;
                                        })
                                            .catch(function (err) {
                                            return false;
                                        })];
                                case 1:
                                    user = _a.sent();
                                    if (!user || user.email !== email || user.password !== password) {
                                        console.log({ email: email, password: password });
                                        console.log(user.email, user.password);
                                        reject("Invalid email or password");
                                    }
                                    token = jwt_1.default.signin(user.id);
                                    resolve({
                                        id: user.id,
                                        token: token
                                    });
                                    return [3, 3];
                                case 2:
                                    e_1 = _a.sent();
                                    reject(e_1);
                                    return [3, 3];
                                case 3: return [2];
                            }
                        });
                    }); })];
            });
        });
    };
    UserService.prototype.login_username = function (username, password) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var user, token, e_2;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4, connection_1.default('users')
                                            .select("*")
                                            .where("username", username)
                                            .first()
                                            .then(function (response) {
                                            return response;
                                        })
                                            .catch(function (err) {
                                            return false;
                                        })];
                                case 1:
                                    user = _a.sent();
                                    if (!user || user.username !== username || user.password !== password) {
                                        reject("Invalid username or password");
                                    }
                                    token = jwt_1.default.signin(user.id);
                                    resolve({
                                        id: user.id,
                                        token: token
                                    });
                                    return [3, 3];
                                case 2:
                                    e_2 = _a.sent();
                                    reject(e_2);
                                    return [3, 3];
                                case 3: return [2];
                            }
                        });
                    }); })];
            });
        });
    };
    UserService.prototype.delete_user = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var user, e_3;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4, connection_1.default('users')
                                            .where("id", id)
                                            .delete()
                                            .then(function (response) {
                                            resolve(response);
                                        })
                                            .catch(function (error) {
                                            reject({
                                                error: error
                                            });
                                        })];
                                case 1:
                                    user = _a.sent();
                                    return [3, 3];
                                case 2:
                                    e_3 = _a.sent();
                                    reject(e_3);
                                    return [3, 3];
                                case 3: return [2];
                            }
                        });
                    }); })];
            });
        });
    };
    UserService.prototype.find_user_by_email = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var user, err_2;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4, connection_1.default('users')
                                            .select("*")
                                            .where("email", email)
                                            .first()
                                            .then(function (response) {
                                            resolve({
                                                id: response.id,
                                                email: email
                                            });
                                        })
                                            .catch(function (error) {
                                            reject(error);
                                        })];
                                case 1:
                                    user = _a.sent();
                                    return [3, 3];
                                case 2:
                                    err_2 = _a.sent();
                                    reject(err_2);
                                    return [3, 3];
                                case 3: return [2];
                            }
                        });
                    }); })];
            });
        });
    };
    return UserService;
}());
exports.UserService = UserService;
