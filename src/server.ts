import { http } from './app'
import dotenv from "dotenv";
dotenv.config();


import "./websockets/manager";



console.log()
console.log("\n/************************************************************\n*                                                           *\n*  .=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-.       *\n*   |                     ______                     |      *\n*   |                  .-\"      \"-.                  |      *\n*   |                 /            \\                 |      *\n*   |     _          |              |          _     |      *\n*   |    ( \\         |,  .-.  .-.  ,|         / )    |      *\n*   |     > \"=._     | )(__/  \\__)( |     _.=\" <     |      *\n*   |    (_/\"=._\"=._ |/     /\\     \\| _.=\"_.=\"\\_)    |      *\n*   |           \"=._\"(_     ^^     _)\"_.=\"           |      *\n*   |               \"=\\__|IIIIII|__/=\"               |      *\n*   |              _.=\"| \\IIIIII/ |\"=._              |      *\n*   |    _     _.=\"_.=\"\\          /\"=._\"=._     _    |      *\n*   |   ( \\_.=\"_.=\"     `--------`     \"=._\"=._/ )   |      *\n*   |    > _.=\"                            \"=._ <    |      *\n*   |   (_/                                    \\_)   |      *\n*   |                                                |      *\n*   '-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-='      *\n*                                                           *\n*      LASCIATE OGNI SPERANZA, VOI CH'ENTRATE               *              \n*************************************************************/\n        ~~ LEAVE EVERY HOPE, YOU COME IN ~~ \n")
console.log(`Server started at http://localhost:${process.env.PORT}`)











http.listen(process.env.PORT);
