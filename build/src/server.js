"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// import "./websockets/manager";
console.log("\n/************************************************************\n*                                                           *\n*  .=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-.       *\n*   |                     ______                     |      *\n*   |                  .-\"      \"-.                  |      *\n*   |                 /            \\                 |      *\n*   |     _          |              |          _     |      *\n*   |    ( \\         |,  .-.  .-.  ,|         / )    |      *\n*   |     > \"=._     | )(__/  \\__)( |     _.=\" <     |      *\n*   |    (_/\"=._\"=._ |/     /\\     \\| _.=\"_.=\"\\_)    |      *\n*   |           \"=._\"(_     ^^     _)\"_.=\"           |      *\n*   |               \"=\\__|IIIIII|__/=\"               |      *\n*   |              _.=\"| \\IIIIII/ |\"=._              |      *\n*   |    _     _.=\"_.=\"\\          /\"=._\"=._     _    |      *\n*   |   ( \\_.=\"_.=\"     `--------`     \"=._\"=._/ )   |      *\n*   |    > _.=\"                            \"=._ <    |      *\n*   |   (_/                                    \\_)   |      *\n*   |                                                |      *\n*   '-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-='      *\n*                                                           *\n*      LASCIATE OGNI SPERANZA, VOI CH'ENTRATE               *              \n*************************************************************/\n        ~~ LEAVE EVERY HOPE, YOU COME IN ~~ \n");
console.log("Server started at http://localhost:" + process.env.PORT);
app_1.http.listen(process.env.PORT);
