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
exports.bthOngController = void 0;
var crypto_1 = require("../../tools/crypto");
var User_1 = require("../../Services/User");
var Ongs_1 = require("../../Services/BTH/Ongs");
var bthOngController = (function () {
    function bthOngController() {
    }
    bthOngController.prototype.index = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var Ong;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Ong = new Ongs_1.OngServices();
                        return [4, Ong.get_ongs()
                                .then(function (response) {
                                return res.status(200).json(response);
                            })
                                .catch(function (err) {
                                return res.status(400).json(err);
                            })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    bthOngController.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var User, Ong, _a, name, email, password, number, city, uf, user_id, ong;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        User = new User_1.UserService();
                        Ong = new Ongs_1.OngServices();
                        _a = req.body, name = _a.name, email = _a.email, password = _a.password, number = _a.number, city = _a.city, uf = _a.uf;
                        password = crypto_1.cript(password);
                        return [4, User.create_user({
                                username: name,
                                email: email,
                                password: password
                            })
                                .then(function (response) {
                                return response.id;
                            })
                                .catch(function (err) {
                                res.status(400).json(err);
                                throw new Error(err);
                            })];
                    case 1:
                        user_id = _b.sent();
                        return [4, Ong.create_ong({ name: name, email: email, number: number, city: city, uf: uf, user_id: user_id })
                                .then(function (response) {
                                return res.status(200).json(response);
                            })
                                .catch(function (err) {
                                return res.status(400).json(err);
                            })];
                    case 2:
                        ong = _b.sent();
                        return [2];
                }
            });
        });
    };
    bthOngController.prototype.authenticate = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var User, Ong, _a, email, password, user, ong;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        User = new User_1.UserService();
                        Ong = new Ongs_1.OngServices();
                        _a = req.body, email = _a.email, password = _a.password;
                        console.log({ email: email, password: password });
                        password = crypto_1.cript(password);
                        console.log({ email: email, password: password });
                        return [4, User.login_email(email, password)
                                .then(function (response) {
                                return response;
                            })
                                .catch(function (err) {
                                res.status(400).json(err);
                                throw new Error("Invalid email or password");
                            })];
                    case 1:
                        user = _b.sent();
                        return [4, Ong.get_user_ongs(user.id)
                                .then(function (response) {
                                return res.status(200).json({ Ong: response, user: user });
                            })
                                .catch(function (err) {
                                return res.status(400).json({ err: err });
                            })];
                    case 2:
                        ong = _b.sent();
                        return [2];
                }
            });
        });
    };
    return bthOngController;
}());
exports.bthOngController = bthOngController;
