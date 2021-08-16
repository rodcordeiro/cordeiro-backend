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
exports.GithubController = exports.GithubAuth = void 0;
const api_1 = require("../tools/api");
class GithubAuth {
    get_token(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const redirect_uri = "http://rodcordeiro.herokuapp.com/gh/token";
            const origin = decodeURIComponent(String(req.query.origin));
            const state = Buffer.from(origin).toString('base64');
            const url = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUBAPP_CLIENT_ID}&redirect_uri=${encodeURIComponent(redirect_uri)}&scope=repo%20user%20delete_repo&state=${state}&allow_signup=false`;
            res.redirect(url);
        });
    }
    validateToken(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const code = req.query.code;
            const state = req.query.state;
            const origin = Buffer.from(state, "base64").toString('ascii');
            const redirect_uri = "http://rodcordeiro.herokuapp.com/gh/token";
            yield api_1.GHAuth.post("/access_token", {
                "client_id": process.env.GITHUBAPP_CLIENT_ID,
                "client_secret": process.env.GITHUBAPP_CLIENT_SECRET,
                "code": code,
                "state": state,
                "redirect_uri": redirect_uri
            })
                .then((response) => {
                const token = response.data.split("&")[0].split("=")[1];
                res.redirect(`${origin}?token=${token}`);
            })
                .catch((err) => {
                console.log({ err });
                return res.status(400).json(err);
            });
        });
    }
}
exports.GithubAuth = GithubAuth;
class GithubController {
    getRepos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { token } = req.body;
            yield api_1.GHapi.get(`/user/repos`, {
                headers: {
                    "authorization": token
                }
            })
                .then((response) => {
                return res.status(200).json(response.data);
            })
                .catch(err => {
                return res.status(400).json(err);
            });
        });
    }
}
exports.GithubController = GithubController;
