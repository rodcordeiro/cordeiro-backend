"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GHapi = exports.GHAuth = exports.habiticaApi = exports.devtoApi = exports.discordApi = void 0;
var axios_1 = __importDefault(require("axios"));
var discordApi = axios_1.default.create({
    baseURL: 'https://discord.com/api/',
});
exports.discordApi = discordApi;
var devtoApi = axios_1.default.create({
    baseURL: 'https://dev.to/api/'
});
exports.devtoApi = devtoApi;
var habiticaApi = axios_1.default.create({
    baseURL: 'https://habitica.com/api/v3'
});
exports.habiticaApi = habiticaApi;
var GHAuth = axios_1.default.create({
    baseURL: "https://github.com/login/oauth",
});
exports.GHAuth = GHAuth;
var GHapi = axios_1.default.create({
    baseURL: "https://api.github.com",
});
exports.GHapi = GHapi;
