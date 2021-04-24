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
var api_1 = require("./api");
//PATHs
var testes_do_cordeiro = process.env.WH_testes_do_cordeiro;
var taverna_do_vader = process.env.WH_taverna_do_vader;
var icnt = process.env.WH_ICNT;
var todo = process.env.WH_TODO;
var DiscordController = /** @class */ (function () {
    function DiscordController() {
    }
    DiscordController.prototype.helloMessage = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api_1.discordApi.post(testes_do_cordeiro, {
                            "content": "Heeey,\nHell yeah I'm alive!! Yep, be proud :smiley:.",
                            "username": "Lord Darth Vader",
                            "avatar_url": "https://rodcordeiro.github.io/shares/img/vader.png"
                        })
                            .then(function (response) {
                            return res.status(response.status).json(response.body);
                        })
                            .catch(function (err) {
                            return res.status(err.status).json(err);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DiscordController.prototype.sendMessage = function (channel, template, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (channel == 'testes_do_cordeiro')
                            channel = testes_do_cordeiro;
                        if (channel == 'taverna_do_vader')
                            channel = taverna_do_vader;
                        if (channel == 'icnt')
                            channel = icnt;
                        if (channel == 'todo')
                            channel = todo;
                        return [4 /*yield*/, api_1.discordApi.post(channel, {
                                "content": "" + template,
                                "username": "Lord Darth Vader",
                                "avatar_url": "https://rodcordeiro.github.io/shares/img/vader.png"
                            })
                                .then(function (response) {
                                if (response.error)
                                    throw new Error(response.error);
                                return res.status(response.status).send();
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    DiscordController.prototype.habiticaMessage = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api_1.discordApi.post(testes_do_cordeiro, {
                            "content": "**Task " + req.body.type + "**\n                task: " + req.body.task.text + "\n                description: " + req.body.task.notes + "\n",
                            "username": "Lord Darth Vader",
                            "avatar_url": "https://rodcordeiro.github.io/shares/img/vader.png"
                        })
                            .then(function (response) {
                            return res.status(response.status).json(response.data);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    return DiscordController;
}());
exports.default = DiscordController;
