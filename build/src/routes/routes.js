"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var api_routes_1 = __importDefault(require("./api.routes"));
var routes = express_1.Router();
routes.use(api_routes_1.default);
routes.get('/', function (req, res) {
    return res.status(200).json({
        "Name": "CordeiroAPI",
        "Version": "2.0.1",
        "releaseNote": "Migration to Typescript"
    });
});
routes.get('/uni9', function (req, res) {
    return res.status(200).send('<style>table,td,tr{border:1px solid; border-collapse:collapse;padding: 2px 5px;}</style>\
    <table>\
    <tr><td>Alex Yio Long Lin</td><td>419106053</td><td>Alex.lin@uni9.edu.br</td></tr>\
    <tr><td>Ednaldo Alves Vanderley Junior</td><td>419103769</td><td>nicknamekill.js@uni9.edu.br</td></tr>\
    <tr><td>Fábio Damião Araújo</td><td>419119927</td><td>Araujo.fabio@uni9.edu.br</td></tr>\
    <tr><td>Guilherme Nascimento Pedroso</td><td>419118123</td><td>guilhermepedroso@uni9.edu.br</td></tr>\
    <tr><td>Heder Evangelista da Silva</td><td>419100871</td><td>-</td></tr>\
    <tr><td>João Pedro Nunes Moreira</td><td>419106506</td><td>joao.m@uni9.edu.br</td></tr>\
    <tr><td>Marcos Gabriel Ribeiro Silva</td><td>419112367</td><td>Gabriel.marcos@uni9.edu.br</td></tr>\
    <tr><td>Marlon de Lira Felix</td><td>419117109</td><td>marlon.lira@uni9.Edu.br</td></tr>\
    <tr><td>Rodrigo de Mendonça Cordeiro</td><td>419108124</td><td>rodrigocordeiro@uni9.edu.br</td></tr>\
    ');
});
exports.default = routes;
