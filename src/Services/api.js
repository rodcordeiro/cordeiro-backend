"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var config = {
    baseURL: 'https://discordapp.com/api/',
};
var discordApi = axios_1.default.create(config);
var devtoApi = axios_1.default.create({
    baseURL: 'https://dev.to/api/'
});
var habiticaApi = axios_1.default.create({
    baseURL: 'https://habitica.com/api/v3'
});
exports.default = {
    discordApi: discordApi,
    devtoApi: devtoApi,
    habiticaApi: habiticaApi
};
