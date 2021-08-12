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
exports.GithubController = exports.GithubAuth = void 0;
var api_1 = require("../tools/api");
var redirect_uri = "http://rodcordeiro.herokuapp.com/gh/token";
var GithubAuth = (function () {
    function GithubAuth() {
    }
    GithubAuth.prototype.get_token = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var origin, state, url;
            return __generator(this, function (_a) {
                origin = decodeURIComponent(String(req.query.origin));
                state = Buffer.from(origin).toString('base64');
                url = "https://github.com/login/oauth/authorize?client_id=" + process.env.GITHUBAPP_CLIENT_ID + "&redirect_uri=" + encodeURIComponent(redirect_uri) + "&scope=repo%20user%20delete_repo&state=" + state + "&allow_signup=false";
                res.redirect(url);
                return [2];
            });
        });
    };
    GithubAuth.prototype.validateToken = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var code, state, origin;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        code = req.query.code;
                        state = req.query.state;
                        origin = Buffer.from(state, "base64").toString('ascii');
                        return [4, api_1.GHAuth.post("/access_token", {
                                "client_id": process.env.GITHUBAPP_CLIENT_ID,
                                "client_secret": process.env.GITHUBAPP_CLIENT_SECRET,
                                "code": code,
                                "state": state,
                                "redirect_uri": redirect_uri
                            })
                                .then(function (response) {
                                var token = response.data.split("&")[0].split("=")[1];
                                res.redirect(origin + "?token=" + token);
                            })
                                .catch(function (err) {
                                console.log({ err: err });
                                return res.status(400).json(err);
                            })];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    return GithubAuth;
}());
exports.GithubAuth = GithubAuth;
var GithubController = (function () {
    function GithubController() {
    }
    GithubController.prototype.getRepos = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        token = req.body.token;
                        return [4, api_1.GHapi.get("/user/repos", {
                                headers: {
                                    "authorization": token
                                }
                            })
                                .then(function (response) {
                                return res.status(200).json(response.data);
                            })
                                .catch(function (err) {
                                return res.status(400).json(err);
                            })];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    return GithubController;
}());
exports.GithubController = GithubController;
