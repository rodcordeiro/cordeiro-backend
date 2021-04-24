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
var unirest_1 = __importDefault(require("unirest"));
var discord_1 = __importDefault(require("../Services/discord"));
var generateUniqueId = require('../Services/generateUniqueId');
var discord = new discord_1.default();
module.exports = {
    generateToken: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var state;
            return __generator(this, function (_a) {
                if (process.env.GITHUB_TOKEN) {
                    return [2 /*return*/, res.status(200).json({ token: process.env.GITHUB_TOKEN })];
                }
                else {
                    state = generateUniqueId();
                    res.redirect("https://github.com/login/oauth/authorize?client_id=" + process.env.GITHUBAPP_CLIENT_ID + "&redirect_uri=http%3A%2F%2Fcordeiro-backend.herokuapp.com%2Fgithub%2FvalidateToken&scope=repo%20user%20delete_repo&state=" + state + "&allow_signup=false");
                }
                return [2 /*return*/];
            });
        });
    },
    validateToken: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var code, state;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        code = req.query.code;
                        state = req.query.state;
                        return [4 /*yield*/, unirest_1.default.post("https://github.com/login/oauth/access_token")
                                .type("json")
                                .send({
                                "client_id": process.env.GITHUBAPP_CLIENT_ID,
                                "client_secret": process.env.GITHUBAPP_CLIENT_SECRET,
                                "code": code,
                                "state": state,
                                "redirect_uri": "http://cordeiro-backend.herokuapp.com/github/validateToken"
                            })
                                .then(function (response) {
                                if (!response.body.error) {
                                    process.env.GITHUB_TOKEN = "token " + response.body.access_token;
                                    res.redirect('http://cordeiro-backend.herokuapp.com/github/token');
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    createRepo: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                unirest_1.default
                    .post('https://api.github.com/user/repos')
                    .headers({
                    "content-type": "application/json",
                    "authorization": process.env.GITHUB_TOKEN,
                    "user-agent": "RodCordeiro"
                })
                    .type('json')
                    .send(req.body)
                    .then(function (response) {
                    var message = " **Repository:** " + response.body.name + ",\n**Description:** " + req.body.description + ",\n**ssh_url:** " + response.body.ssh_url + "\n**clone_url:** " + response.body.clone_url + "\n**svn_url:** " + response.body.svn_url;
                    if (response.statusCode == 201) {
                        discord.sendMessage('testes_do_cordeiro', message, res);
                    }
                    return res.status(response.statusCode).json(response.body);
                });
                return [2 /*return*/];
            });
        });
    },
    deleteRepo: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var user, repo;
            return __generator(this, function (_a) {
                user = req.params.user;
                repo = req.params.repo;
                unirest_1.default
                    .delete("https://api.github.com/repos/" + user + "/" + repo)
                    .headers({
                    "content-type": "application/json",
                    "authorization": process.env.GITHUB_TOKEN,
                    "user-agent": "RodCordeiro"
                })
                    .type('json')
                    .then(function (response) {
                    var message = "Deleted repository " + repo;
                    if (response.statusCode == 204) {
                        discord.sendMessage('testes_do_cordeiro', message, res);
                    }
                    return res.status(response.statusCode).json(response.body);
                });
                return [2 /*return*/];
            });
        });
    }
};
