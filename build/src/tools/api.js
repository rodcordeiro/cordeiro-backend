"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.habiAPI = exports.GHapi = exports.GHAuth = exports.habiticaApi = exports.devtoApi = exports.discordApi = void 0;
const axios_1 = __importDefault(require("axios"));
const discordApi = axios_1.default.create({
    baseURL: 'https://discord.com/api/',
});
exports.discordApi = discordApi;
const devtoApi = axios_1.default.create({
    baseURL: 'https://dev.to/api/'
});
exports.devtoApi = devtoApi;
const habiticaApi = axios_1.default.create({
    baseURL: 'https://habitica.com/api/v3'
});
exports.habiticaApi = habiticaApi;
const GHAuth = axios_1.default.create({
    baseURL: "https://github.com/login/oauth",
});
exports.GHAuth = GHAuth;
const GHapi = axios_1.default.create({
    baseURL: "https://api.github.com",
});
exports.GHapi = GHapi;
const habiAPI = axios_1.default.create({
    baseURL: "https://habitica.com/api/v3"
});
exports.habiAPI = habiAPI;
