"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var api_routes_1 = __importDefault(require("./api.routes"));
var bth_routes_1 = __importDefault(require("./bth.routes"));
var esb_routes_1 = __importDefault(require("./esb.routes"));
var routes = express_1.Router();
routes.use(api_routes_1.default);
routes.use(bth_routes_1.default);
routes.use(esb_routes_1.default);
routes.get('/', function (req, res) {
    return res.status(200).json({
        "schemaVersion": 1,
        "label": "Release Note",
        "message": "Included Escriba endpoints",
        "color": "lightblue",
        "labelColor": "black",
        "style": "for-the-badge",
        "logoSvg": '<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="600.000000pt" height="600.000000pt" viewBox="0 0 600.000000 600.000000" preserveAspectRatio="xMidYMid meet"><metadata>Created by potrace 1.16, written by Peter Selinger 2001-2019</metadata><g transform="translate(0.000000,600.000000) scale(0.100000,-0.100000)"fill="#000000" stroke="none"><path d="M2975 5865 c6 -2 90 -9 187 -14 276 -17 498 -56 723 -128 421 -135761 -333 1110 -647 106 -96 113 -101 35 -26 -441 424 -988 695 -1586 785 -13520 -507 44 -469 30z"/><path d="M2750 5854 c-14 -2 -65 -9 -115 -15 -292 -35 -622 -137 -904 -278-319 -160 -582 -358 -823 -618 l-71 -78 74 75 c281 284 513 457 815 608 362181 775 289 1164 305 65 3 62 3 -20 4 -52 0 -106 -1 -120 -3z"/><path d="M2671 5674 c-502 -68 -968 -268 -1356 -581 -96 -77 -349 -322 -341-330 2 -2 28 22 57 53 471 506 1111 814 1793 863 105 8 107 8 31 9 -44 0 -127-6 -184 -14z"/><path d="M3210 5680 c638 -51 1180 -287 1664 -726 66 -59 116 -102 112 -95-16 26 -237 218 -342 297 -413 310 -959 513 -1429 529 l-110 4 105 -9z"/><path d="M3628 5135 c511 -143 960 -470 1255 -915 146 -220 279 -540 326 -78027 -142 31 -155 26 -88 -12 140 -112 452 -203 633 -236 471 -643 854 -11291062 -119 51 -345 124 -381 122 -9 0 38 -16 106 -34z"/><path d="M2365 5131 c-556 -170 -1022 -549 -1313 -1066 -130 -232 -240 -572-256 -792 -5 -60 -4 -58 9 24 77 503 314 961 671 1302 263 252 577 433 919531 55 16 91 29 80 29 -11 0 -60 -13 -110 -28z"/><path d="M744 4461 c-220 -338 -368 -742 -419 -1152 -18 -145 -21 -469 -5-609 43 -392 165 -766 352 -1082 54 -91 59 -87 8 5 -244 433 -360 868 -3601353 -1 552 131 999 441 1492 32 50 56 92 53 92 -2 0 -34 -45 -70 -99z"/><path d="M5350 4358 c229 -408 352 -816 373 -1243 3 -60 3 -59 5 12 5 201 -74577 -178 841 -58 150 -218 462 -236 462 -2 0 14 -33 36 -72z"/><path d="M5236 2679 c-26 -254 -147 -595 -303 -857 -289 -485 -778 -854 -1328-1002 -38 -10 -60 -19 -48 -19 33 -1 274 80 379 128 649 293 1124 874 12781563 25 111 43 248 34 248 -3 0 -8 -28 -12 -61z"/><path d="M801 2646 c-1 -16 11 -81 25 -145 110 -497 389 -949 779 -1264 138-112 255 -186 425 -271 137 -68 374 -157 416 -155 11 0 -18 11 -64 25 -800236 -1408 914 -1562 1742 -10 54 -19 84 -19 68z"/><path d="M4995 1132 c-327 -363 -803 -644 -1305 -772 -218 -56 -344 -72 -630-80 l-265 -8 265 3 c277 3 358 12 569 59 453 103 892 336 1231 652 104 97 216214 204 213 -5 0 -36 -31 -69 -67z"/><path d="M1090 1074 c413 -417 924 -680 1500 -774 69 -11 143 -19 165 -19 221 -9 8 -69 15 -517 67 -997 273 -1396 603 -30 25 -111 100 -180 168 -68 68-126 123 -129 123 -3 0 46 -52 109 -116z"/><path d="M5040 937 c-378 -371 -807 -613 -1315 -743 -93 -23 -162 -43 -153-43 34 -2 325 78 438 119 258 94 560 262 790 440 81 63 415 379 400 380 -3 0-75 -69 -160 -153z"/><path d="M955 969 c484 -489 1068 -775 1741 -854 233 -27 674 -14 824 26 4010 61 12 -177 -16 -166 -19 -481 -19 -647 0 -676 79 -1284 380 -1755 869 -4042 -76 76 -79 76 -4 0 38 -45 93 -101z"/></g></svg>',
        "logoWidth": 50
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
