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
        "label": "RodCordeiro API",
        "message": "Included Escriba endpoints",
        "color": "lightgray",
        "labelColor": "gray",
        "style": "for-the-badge",
        "logoSvg": '<svg version="1.0" xmlns="http://www.w3.org/2000/svg"  width="600.000000pt" height="600.000000pt" viewBox="0 0 600.000000 600.000000"  preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,600.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"> <path d="M2885 5944 c-22 -2 -96 -8 -165 -14 -238 -21 -542 -93 -780 -187 -686 -270 -1241 -776 -1569 -1431 -246 -490 -358 -1069 -305 -1580 43 -423 124 -712 299 -1067 145 -296 323 -544 560 -780 478 -478 1078 -768 1760 -850 171 -21 589 -16 751 9 405 61 781 195 1114 396 778 469 1295 1262 1414 2170 18 141 18 599 0 740 -72 547 -285 1053 -624 1480 -107 134 -335 363 -469 469 -437 347 -933 554 -1491 625 -116 15 -421 27 -495 20z m360 -85 c571 -43 1121 -259 1575 -619 134 -106 354 -325 458 -458 310 -391 513 -848 591 -1330 151 -925 -147 -1851 -808 -2513 -1013 -1012 -2616 -1129 -3764 -275 -362 269 -665 632 -861 1031 -150 304 -237 591 -282 930 -21 157 -23 518 -5 675 74 629 346 1213 780 1671 595 629 1443 954 2316 888z"/> <path d="M2830 5770 c-676 -47 -1296 -328 -1776 -805 -162 -161 -240 -256 -365 -443 -240 -361 -394 -780 -444 -1211 -19 -163 -19 -499 0 -661 119 -1018 798 -1897 1755 -2273 331 -130 644 -188 1020 -188 474 0 861 93 1279 306 559 285 1000 748 1268 1330 294 641 328 1400 94 2075 -346 1000 -1249 1730 -2292 1854 -161 19 -394 26 -539 16z m550 -94 c794 -110 1482 -546 1919 -1216 591 -904 585 -2082 -14 -2980 -116 -173 -199 -274 -345 -420 -432 -433 -958 -691 -1580 -776 -170 -23 -510 -23 -680 0 -615 84 -1142 341 -1570 766 -438 435 -695 952 -786 1585 -24 164 -24 522 0 695 68 500 267 965 582 1360 87 109 295 317 404 404 427 341 930 544 1470 596 127 12 470 4 600 -14z"/> <path d="M2737 5385 c-457 -58 -869 -229 -1222 -509 -116 -92 -284 -257 -374 -369 -275 -340 -461 -773 -523 -1217 -19 -142 -17 -507 5 -650 106 -697 484 -1293 1067 -1682 131 -87 361 -202 511 -255 142 -51 327 -97 479 -120 160 -24 520 -24 680 0 265 41 501 114 730 228 257 128 447 265 650 468 392 394 637 919 691 1481 14 151 7 431 -16 580 -102 671 -484 1273 -1045 1650 -294 197 -630 329 -985 385 -140 23 -508 28 -648 10z m625 -179 c472 -75 912 -299 1248 -636 184 -184 326 -386 439 -620 138 -289 207 -570 218 -895 36 -1054 -673 -1998 -1696 -2255 -199 -50 -324 -65 -551 -64 -235 0 -360 15 -570 70 -565 147 -1062 521 -1363 1026 -526 882 -383 2013 347 2741 289 289 659 497 1061 596 74 18 236 45 330 55 84 9 444 -3 537 -18z"/> <path d="M1243 4043 c-34 -12 -79 -128 -93 -237 -20 -160 23 -265 133 -320 56 -28 65 -29 245 -35 178 -6 190 -7 244 -34 67 -33 123 -91 137 -144 14 -49 14 -188 1 -214 -8 -15 -7 -21 4 -25 37 -14 -72 -159 -137 -183 -39 -15 -67 -14 -101 4 -15 8 -36 15 -45 15 -14 0 -14 2 -1 10 8 5 24 10 36 10 30 0 103 56 118 91 24 57 -1 166 -57 246 -27 39 -41 45 -118 44 -134 0 -208 -52 -279 -193 -45 -91 -52 -157 -24 -228 18 -44 107 -125 175 -158 l36 -18 -66 -23 c-97 -34 -170 -82 -248 -164 -101 -107 -126 -163 -131 -300 -4 -108 -4 -109 32 -180 44 -90 124 -181 185 -211 90 -46 276 -66 506 -55 214 10 352 54 402 128 33 48 30 95 -6 132 -26 26 -36 29 -93 29 -80 0 -108 -17 -108 -66 0 -40 33 -79 74 -90 14 -3 26 -9 26 -14 0 -4 -42 -17 -92 -30 -167 -42 -486 -39 -639 6 -63 19 -139 89 -187 174 -27 47 -30 59 -25 109 7 72 43 136 85 150 39 14 102 14 209 0 100 -13 137 -34 277 -159 70 -63 91 -88 86 -102 -9 -30 12 -21 129 55 138 91 282 177 294 177 12 0 33 44 33 69 0 9 14 27 30 39 l30 23 0 299 c0 190 4 300 10 300 11 0 13 -7 35 -150 10 -58 20 -178 24 -267 l6 -161 61 -64 c33 -35 95 -110 137 -167 43 -57 91 -113 108 -123 l30 -18 200 146 c188 138 204 152 260 232 60 87 73 128 45 151 -11 10 -27 6 -75 -19 -34 -16 -84 -39 -111 -50 -44 -17 -50 -18 -50 -4 0 12 -6 15 -24 10 -33 -8 -35 4 -46 239 -6 110 -15 232 -21 272 -13 80 -26 92 -104 94 -22 0 -53 3 -68 6 l-29 5 21 22 c41 43 16 50 -36 10 -27 -21 -39 -24 -56 -17 -18 8 -12 14 56 51 118 63 166 102 167 134 0 18 11 36 36 56 22 18 32 32 25 36 -6 4 -15 4 -21 1 -18 -11 -11 7 24 59 19 29 42 68 52 88 l17 36 -102 102 c-91 92 -106 112 -151 206 -31 65 -55 104 -65 104 -8 0 -46 -22 -83 -49 -137 -100 -309 -194 -374 -206 -33 -6 -42 -2 -103 44 -142 109 -173 116 -406 96 -144 -12 -198 -13 -262 -5 -91 13 -97 15 -97 36 0 10 -6 13 -18 10 -29 -10 -56 28 -54 73 3 39 -13 62 -35 54z m14 -187 c-11 -27 -27 -17 -27 16 0 30 1 31 16 16 9 -9 14 -24 11 -32z m1433 -18 c0 -7 -54 -50 -120 -96 -110 -76 -138 -102 -109 -102 6 0 63 36 127 80 93 64 118 77 130 68 12 -10 11 -15 -9 -31 -36 -29 -156 -97 -196 -111 -49 -17 -58 -40 -13 -34 30 5 31 4 15 -9 -30 -21 -47 -16 -100 30 l-48 43 32 23 32 23 -7 -26 c-3 -14 -3 -26 1 -26 4 0 33 24 65 53 53 47 173 127 192 127 5 0 8 -6 8 -12z m-1366 -11 c17 -12 14 -16 -31 -45 -27 -18 -53 -32 -56 -32 -17 0 -5 36 20 62 30 31 41 34 67 15z m456 -12 c0 -2 -19 -13 -42 -23 -24 -10 -104 -55 -178 -99 -164 -97 -180 -106 -180 -96 0 8 236 155 322 201 38 20 78 29 78 17z m130 1 c0 -2 -56 -31 -125 -65 -69 -33 -168 -85 -220 -116 -89 -52 -123 -66 -111 -46 6 9 185 115 326 194 36 20 79 36 98 37 17 0 32 -2 32 -4z m-481 -10 c-17 -17 -162 -116 -170 -116 -25 0 -4 31 40 60 27 17 55 38 61 46 7 7 26 14 43 14 17 0 28 -2 26 -4z m211 0 c0 -12 -304 -196 -311 -189 -9 9 213 162 262 182 26 10 49 14 49 7z m330 -6 c18 -11 25 -6 -105 -75 -60 -32 -149 -80 -196 -106 -79 -45 -129 -61 -129 -41 0 12 76 55 238 136 83 42 152 81 152 86 0 12 20 13 40 0z m-460 -4 c0 -7 -151 -111 -188 -130 -19 -10 -36 -15 -38 -13 -4 4 43 41 161 125 26 19 65 29 65 18z m525 -32 c24 -18 25 -16 -90 -75 -97 -49 -175 -98 -175 -110 0 -15 11 -11 163 67 129 66 151 74 163 62 13 -12 -4 -24 -128 -85 l-143 -72 -77 12 c-43 6 -78 14 -78 18 0 5 72 45 161 90 88 45 163 88 166 96 6 16 13 16 38 -3z m367 -26 c-17 -21 -72 -50 -72 -39 0 6 17 19 38 30 44 24 48 25 34 9z m-1172 -122 c65 -74 173 -106 360 -106 155 0 224 -18 270 -69 51 -55 89 -131 95 -187 4 -37 3 -43 -4 -24 -5 14 -12 36 -15 50 -3 14 -19 46 -35 72 -25 39 -44 53 -114 88 l-85 42 -153 -1 c-166 -1 -228 10 -289 51 -36 25 -74 91 -84 148 l-7 35 14 -31 c8 -17 29 -47 47 -68z m1574 55 c16 -17 15 -19 -11 -36 -15 -10 -71 -49 -124 -86 -53 -38 -101 -69 -107 -69 -10 0 -62 61 -62 73 0 3 30 24 68 48 37 23 77 49 90 57 12 8 22 12 22 10 0 -3 -36 -29 -80 -59 -44 -29 -80 -57 -80 -61 0 -22 46 0 140 66 58 41 110 75 116 75 6 1 18 -7 28 -18z m-625 -58 c6 -12 11 -26 11 -32 0 -9 -209 -129 -233 -134 -7 -1 -12 4 -12 11 0 7 47 41 105 74 123 70 129 75 106 84 -11 4 -55 -17 -127 -60 -61 -36 -113 -66 -116 -66 -3 0 -16 8 -29 19 -18 14 -21 21 -11 28 26 20 164 91 199 102 20 7 42 18 48 26 11 13 15 11 30 -8 9 -12 22 -32 29 -44z m75 22 c-3 -7 -1 -16 5 -20 6 -3 11 -21 11 -38 -1 -30 -2 -29 -20 18 -24 60 -24 66 -6 59 8 -3 12 -12 10 -19z m625 -39 l34 -35 -26 -43 c-14 -24 -34 -53 -44 -65 -17 -21 -212 -138 -218 -131 -2 2 -5 14 -7 28 -3 22 12 35 131 116 74 50 137 96 139 102 8 26 -28 8 -143 -68 -66 -44 -125 -80 -130 -80 -6 0 -16 5 -22 11 -9 9 0 21 35 49 55 44 204 149 213 150 3 0 20 -15 38 -34z m-504 -12 c65 -49 185 -212 185 -251 0 -29 -18 -10 -46 49 -19 41 -56 90 -106 143 -43 44 -78 81 -78 83 0 7 15 -1 45 -24z m103 -197 c52 -87 52 -101 -3 -139 -45 -32 -134 -70 -146 -62 -7 4 0 332 8 354 6 19 96 -78 141 -153z m-270 107 c3 -29 -1 -33 -103 -88 -58 -32 -107 -57 -109 -55 -36 53 -37 58 -14 72 72 45 195 107 208 104 9 -1 16 -15 18 -33z m2 -83 c0 -14 -27 -36 -90 -76 -87 -53 -110 -60 -110 -30 0 9 172 118 198 124 1 1 2 -8 2 -18z m589 -56 c-19 -19 -250 -147 -255 -142 -6 5 103 82 191 134 39 24 72 38 74 32 2 -6 -3 -17 -10 -24z m-589 -24 c0 -26 -184 -148 -188 -125 -5 23 23 49 109 100 41 24 75 44 77 44 1 0 2 -8 2 -19z m538 -57 c-8 -9 -67 -41 -129 -72 -84 -42 -115 -63 -117 -78 -2 -11 -16 -28 -31 -37 -28 -16 -31 -16 -81 7 l-51 24 53 17 c29 10 58 21 64 26 5 4 19 6 30 3 11 -3 68 21 144 60 138 72 141 73 118 50z m-547 -42 c-12 -23 -179 -147 -187 -139 -3 2 -2 17 2 31 5 19 31 44 93 86 83 56 114 64 92 22z m-631 -25 c0 -2 -29 -27 -65 -55 -36 -29 -65 -59 -65 -67 0 -8 2 -15 4 -15 3 0 43 29 91 65 47 36 94 65 104 65 38 0 91 -88 91 -152 0 -63 -57 -108 -137 -108 l-37 0 32 33 c18 18 32 36 32 40 0 18 -28 3 -90 -48 -37 -30 -74 -55 -83 -55 -8 0 -18 -6 -20 -12 -4 -8 -6 -7 -6 3 -1 10 45 48 119 99 127 87 136 95 120 105 -5 3 -63 -30 -129 -74 -72 -49 -123 -77 -126 -70 -9 13 -15 8 80 64 108 63 177 117 166 128 -6 6 -42 -12 -93 -46 -78 -52 -140 -87 -153 -87 -3 0 -5 12 -5 28 0 47 41 105 95 134 44 24 75 34 75 25z m620 -60 c0 -19 -20 -36 -100 -87 -56 -34 -103 -60 -106 -57 -8 8 63 71 136 121 36 25 66 45 68 45 1 1 2 -10 2 -22z m381 -67 c23 0 4 -23 -46 -55 -30 -19 -57 -35 -60 -35 -3 0 -5 13 -5 28 0 22 8 33 38 50 20 12 43 19 50 17 8 -3 18 -5 23 -5z m-401 -19 c0 -19 -44 -62 -108 -105 -76 -51 -172 -133 -172 -147 0 -19 23 -6 115 66 53 41 98 75 101 75 3 0 0 -8 -5 -18 -20 -38 -168 -153 -231 -180 -44 -19 -220 -30 -220 -14 0 18 55 42 95 42 57 0 100 27 174 107 43 47 100 95 152 128 87 55 99 61 99 46z m186 -19 c21 -14 54 -99 64 -167 10 -71 28 -427 22 -445 -2 -6 -8 -8 -13 -4 -5 3 -9 58 -9 122 -1 69 -10 179 -24 270 -20 135 -26 156 -50 180 -14 16 -26 33 -26 40 0 13 19 16 36 4z m297 1 c4 -3 -32 -35 -80 -69 -71 -52 -89 -61 -96 -49 -12 21 -4 30 71 80 64 43 91 53 105 38z m147 -17 c0 -5 -298 -216 -305 -216 -3 0 -5 15 -5 33 0 28 9 39 83 93 106 80 133 93 185 94 23 0 42 -2 42 -4z m-540 -296 c0 -177 -4 -280 -10 -280 -5 0 -40 31 -76 69 -64 66 -116 97 -264 159 -24 9 -24 10 -5 17 58 20 88 39 161 108 48 45 94 101 118 141 26 44 45 66 57 66 18 0 19 -13 19 -280z m590 252 c0 -10 -27 -34 -63 -57 -34 -22 -113 -82 -174 -132 l-113 -93 0 34 c0 31 8 40 108 113 227 168 242 177 242 135z m-1510 -30 c1 -56 35 -121 93 -176 43 -41 46 -46 19 -30 -19 10 -56 42 -83 71 -49 51 -49 52 -49 118 0 42 4 64 10 60 6 -3 10 -23 10 -43z m196 -59 c-17 -34 -58 -58 -81 -49 -24 9 -16 20 40 58 55 37 64 35 41 -9z m1324 2 c0 -18 -14 -34 -57 -64 -32 -21 -112 -84 -178 -139 l-120 -100 -3 41 c-2 24 1 43 7 45 6 2 46 32 89 66 113 92 245 185 254 180 5 -3 8 -16 8 -29z m-1291 -59 c9 -11 6 -18 -17 -35 -27 -19 -31 -19 -43 -5 -11 14 -9 19 11 35 30 22 34 23 49 5z m1276 -42 c-11 -8 -48 -33 -83 -56 -64 -41 -232 -193 -232 -209 0 -20 23 -6 97 61 89 80 217 172 227 163 3 -3 6 -18 6 -32 0 -19 -8 -30 -27 -39 -16 -6 -68 -48 -118 -92 -202 -180 -204 -181 -213 -92 l-4 49 83 70 c180 150 264 212 274 201 7 -6 3 -14 -10 -24z m-1203 -9 c3 -16 -47 -39 -67 -31 -17 6 -17 7 1 27 18 20 63 23 66 4z m1218 -132 c0 -18 -271 -273 -289 -273 -30 0 -16 28 40 78 72 65 243 212 246 212 2 0 3 -8 3 -17z m-1047 -23 c66 -10 217 -64 217 -79 0 -4 -63 -58 -140 -120 -77 -62 -140 -117 -140 -122 0 -21 28 -4 131 78 112 90 186 143 199 143 5 0 10 -6 13 -13 3 -9 -24 -33 -71 -65 -89 -59 -212 -159 -212 -173 0 -22 31 -4 135 77 61 48 125 93 143 102 31 15 33 15 60 -10 15 -14 40 -33 55 -43 33 -21 33 -20 -57 -70 -81 -44 -81 -31 -1 15 53 30 69 50 42 50 -23 0 -129 -69 -223 -146 -94 -76 -104 -82 -104 -63 0 15 50 59 163 146 48 37 87 70 87 75 0 29 -69 -13 -168 -101 -117 -103 -106 -99 -155 -55 -23 22 -57 50 -75 64 l-34 25 146 99 c137 92 164 116 133 116 -12 0 -186 -114 -276 -181 -23 -17 -35 -19 -57 -12 -27 9 -27 9 57 75 46 36 104 77 128 92 31 20 40 31 33 38 -13 13 -78 -27 -205 -125 -62 -48 -81 -58 -97 -51 -18 8 -10 17 67 76 109 83 155 127 148 139 -3 5 -71 -41 -151 -101 -120 -91 -150 -110 -179 -110 -19 0 -35 3 -35 8 1 4 38 32 83 62 45 30 109 81 142 112 67 64 74 66 198 48z m-193 -4 c0 -7 -207 -167 -265 -206 l-50 -33 30 30 c80 80 190 175 223 193 35 18 62 25 62 16z m-141 -40 c-2 -1 -35 -29 -74 -61 -38 -32 -112 -99 -162 -149 -124 -121 -124 -88 -1 40 90 93 195 174 226 174 8 0 13 -2 11 -4z m1391 -17 c0 -12 -12 -31 -27 -42 -16 -12 -69 -59 -120 -104 -92 -83 -113 -96 -113 -69 0 14 237 236 253 236 4 0 7 -9 7 -21z m16 -91 c5 -18 9 -36 9 -39 0 -9 -192 -169 -203 -169 -5 0 -17 9 -27 20 -18 20 -18 21 6 45 50 49 194 175 201 175 3 0 10 -15 14 -32z m193 -61 c-31 -26 -99 -66 -99 -59 0 12 71 61 89 61 8 1 12 -1 10 -2z m-125 -16 c16 -6 6 -18 -68 -79 -102 -84 -136 -104 -157 -92 -16 11 -23 4 95 104 91 77 97 80 130 67z m-376 -113 c153 -152 175 -180 158 -203 -20 -27 -46 -7 -117 92 -35 49 -87 114 -116 146 -49 54 -63 77 -46 77 3 0 58 -51 121 -112z m531 56 c-26 -28 -309 -237 -314 -232 -9 9 309 258 329 258 5 0 -1 -12 -15 -26z m-1543 -24 c32 -11 77 -33 99 -47 55 -36 155 -133 155 -150 0 -7 7 -13 15 -13 17 0 21 -45 5 -55 -8 -5 -134 100 -210 174 -35 34 -120 62 -231 75 -108 12 -112 15 -44 29 56 12 156 6 211 -13z m664 -24 c0 -8 -44 -41 -97 -72 -54 -32 -128 -77 -166 -101 -37 -24 -70 -43 -73 -43 -3 0 11 16 33 36 34 33 277 191 296 193 4 1 7 -5 7 -13z m560 -101 c-7 -9 -15 -13 -19 -10 -3 3 1 10 9 15 21 14 24 12 10 -5z m-656 -231 c9 -3 16 -14 16 -24 0 -14 -7 -16 -37 -13 -42 4 -59 16 -49 32 8 12 45 15 70 5z"/> <path d="M4147 3765 c-119 -118 -228 -221 -241 -230 -22 -15 -24 -14 -29 5 -6 24 -48 27 -67 5 -7 -8 -19 -15 -27 -15 -17 0 -206 -169 -245 -220 -75 -96 -109 -405 -67 -600 12 -52 52 -136 81 -166 l20 -22 -45 -31 c-53 -36 -122 -112 -147 -162 -24 -46 -50 -158 -50 -213 0 -58 22 -127 60 -186 27 -42 41 -53 103 -79 139 -57 223 -80 339 -92 92 -10 122 -10 146 0 50 21 110 125 112 192 0 27 -39 87 -81 126 -60 55 -175 72 -203 31 -20 -28 -20 -51 -1 -88 22 -43 51 -55 135 -55 69 0 75 -2 78 -22 2 -12 -6 -31 -19 -44 -21 -21 -27 -21 -135 -15 -324 19 -515 207 -419 410 25 54 122 156 147 156 7 0 22 -20 32 -43 11 -23 53 -75 94 -115 58 -57 95 -84 164 -117 126 -62 175 -70 328 -57 142 12 218 30 307 72 59 27 163 112 163 133 0 5 33 44 74 86 149 153 176 185 176 208 0 34 -32 30 -94 -12 -55 -36 -153 -81 -161 -73 -2 2 -7 201 -10 441 l-5 436 32 17 c98 50 189 162 258 320 44 101 44 96 10 164 -4 8 -18 15 -31 15 -20 0 -25 -7 -31 -42 -14 -83 -109 -243 -144 -243 -8 0 -30 -11 -47 -24 -39 -28 -57 -39 -57 -33 0 3 36 34 80 68 80 63 97 89 60 89 -16 0 -11 8 25 44 43 44 64 97 51 131 -12 31 -66 10 -66 -26 0 -37 -70 -96 -125 -106 -11 -2 -34 -6 -51 -9 -21 -4 -36 -1 -47 11 -10 9 -25 14 -36 10 -10 -3 -23 1 -30 9 -10 12 -7 18 18 31 40 20 42 49 4 42 -16 -3 -38 -8 -50 -12 -17 -6 -28 3 -62 48 -22 31 -44 58 -49 61 -4 2 -105 -92 -225 -209z m253 52 c0 -2 -18 -16 -40 -31 -22 -14 -86 -66 -142 -114 -163 -140 -228 -186 -216 -153 2 6 83 86 182 180 l179 170 18 -23 c11 -13 19 -26 19 -29z m50 -58 c7 -11 10 -22 8 -23 -2 -2 -40 -32 -85 -68 -114 -92 -201 -150 -237 -158 -37 -7 -41 -34 -6 -38 35 -4 131 55 261 161 104 83 131 98 143 78 6 -9 -198 -164 -302 -230 -55 -35 -80 -37 -147 -11 l-30 12 40 34 c194 170 315 264 336 264 5 0 13 -9 19 -21z m310 -33 c0 -5 -188 -147 -225 -170 -47 -29 -19 -4 100 88 100 77 125 94 125 82z m-145 -51 c-55 -45 -222 -163 -253 -179 -17 -9 -40 -26 -51 -37 -11 -12 -28 -19 -41 -17 -17 2 -4 15 67 65 48 34 129 91 179 126 50 35 97 67 105 69 26 10 23 -3 -6 -27z m125 -170 c-17 -21 -80 -58 -86 -52 -3 3 7 13 23 23 15 9 37 23 48 30 27 17 30 17 15 -1z m-876 -213 l-17 -104 131 -131 c83 -83 132 -140 132 -153 0 -11 5 -25 11 -31 6 -6 8 -17 4 -23 -5 -8 -14 2 -25 27 -19 42 -215 237 -250 248 -21 7 -22 11 -14 64 4 31 9 98 10 148 1 62 6 98 15 110 13 15 14 13 18 -18 1 -19 -5 -81 -15 -137z m93 96 c-2 -13 -4 -5 -4 17 -1 22 1 32 4 23 2 -10 2 -28 0 -40z m619 33 c-7 -10 -87 -31 -113 -30 -10 1 7 9 37 19 63 21 83 24 76 11z m-478 -48 c4 -27 41 -38 158 -48 67 -5 100 -2 192 19 61 15 117 26 125 26 12 0 15 -65 19 -432 3 -238 5 -434 4 -434 -1 -1 -34 -5 -75 -9 -66 -7 -73 -6 -68 9 10 25 -19 31 -49 11 -20 -13 -37 -15 -68 -11 -42 7 -176 64 -176 75 1 3 40 33 87 66 125 87 191 181 200 285 4 42 1 66 -12 94 -23 48 -147 180 -222 236 -32 24 -82 61 -110 83 -29 22 -50 44 -47 49 10 16 39 3 42 -19z m287 -3 c-11 -5 -47 -8 -80 -8 l-60 1 55 7 c30 4 66 7 80 8 23 1 23 0 5 -8z m-665 -20 c0 -20 -69 -104 -70 -84 0 12 57 104 65 104 3 0 5 -9 5 -20z m80 -119 c-6 -36 -14 -76 -16 -88 -5 -17 4 -28 48 -56 90 -58 214 -182 233 -232 19 -48 17 -127 -4 -178 l-11 -28 -35 27 c-53 40 -165 179 -165 203 0 12 -7 24 -15 27 -8 4 -15 11 -15 16 0 5 -9 21 -20 35 -15 19 -17 30 -10 43 13 25 13 30 -4 30 -18 0 -24 20 -25 92 0 60 23 210 36 231 14 21 15 -51 3 -122z m198 100 c11 -6 7 -13 -16 -30 -17 -11 -33 -21 -36 -21 -12 0 -6 24 11 42 18 20 22 21 41 9z m-440 -107 c-16 -42 -35 -106 -42 -142 -8 -41 -14 -55 -15 -37 -1 46 26 163 50 211 34 72 39 50 7 -32z m509 51 c1 -5 -20 -25 -47 -44 -50 -34 -65 -61 -32 -61 9 0 40 18 68 39 33 25 56 36 64 31 9 -6 -8 -22 -56 -53 -75 -49 -84 -48 -127 9 -16 21 -15 22 41 58 56 35 82 41 89 21z m-367 -47 c0 -13 -77 -88 -91 -88 -16 0 10 42 45 72 34 30 46 34 46 16z m480 -31 c0 -7 -26 -28 -57 -46 -86 -49 -92 -51 -98 -42 -3 5 19 23 47 39 29 17 62 37 73 46 25 19 35 20 35 3z m60 -58 c0 -12 -71 -63 -109 -79 -30 -12 -61 -8 -61 7 0 4 32 27 72 50 65 38 98 45 98 22z m-550 -21 c0 -16 -16 -33 -51 -57 -27 -19 -52 -32 -55 -29 -10 11 19 54 54 80 45 33 52 34 52 6z m595 -29 c-15 -23 -127 -90 -143 -84 -12 4 -6 12 28 32 25 15 58 37 75 49 27 21 52 23 40 3z m40 -50 c-5 -8 -95 -71 -132 -92 -6 -4 -14 -3 -17 2 -7 11 134 112 146 105 5 -3 6 -10 3 -15z m-626 -21 c5 -13 7 -27 4 -31 -8 -13 -104 -87 -114 -87 -5 0 -9 17 -9 38 0 33 5 40 48 69 57 38 60 39 71 11z m-169 -248 c7 -30 30 -92 50 -137 23 -49 35 -85 29 -89 -6 -3 -11 -4 -13 -3 -1 2 -14 22 -28 44 -15 22 -34 60 -43 85 -21 59 -37 217 -28 277 7 46 8 45 14 -37 3 -47 11 -110 19 -140z m204 155 c3 -10 -16 -31 -61 -65 -73 -55 -83 -59 -83 -31 0 11 25 37 62 65 70 51 73 52 82 31z m526 11 c0 -3 -13 -14 -30 -26 -16 -12 -30 -17 -30 -11 0 6 12 17 28 25 31 17 32 18 32 12z m30 -41 c-24 -25 -49 -45 -55 -45 -9 1 84 89 95 90 2 0 -16 -20 -40 -45z m24 -56 c-76 -78 -114 -106 -114 -85 0 15 161 159 169 150 3 -2 -22 -32 -55 -65z m-544 23 c0 -10 -139 -132 -151 -132 -26 0 -3 39 40 68 27 18 57 42 66 52 18 20 45 27 45 12z m34 -51 c7 -11 -146 -141 -165 -141 -13 0 139 149 153 150 4 0 9 -4 12 -9z m323 -28 c-3 -10 -5 -4 -5 12 0 17 2 24 5 18 2 -7 2 -21 0 -30z m-277 -34 c14 -25 21 -16 -82 -95 -73 -56 -85 -62 -98 -49 -12 13 -12 17 0 30 32 31 155 134 162 134 4 1 12 -8 18 -20z m56 -70 c4 -7 0 -15 -8 -20 -8 -4 -49 -33 -92 -64 -80 -57 -100 -65 -94 -40 3 13 164 133 180 135 4 0 10 -5 14 -11z m37 -49 c-4 -4 -45 -37 -91 -74 -77 -62 -103 -76 -102 -58 1 12 184 149 193 144 5 -2 5 -8 0 -12z m62 -36 c17 -13 18 -16 5 -24 -17 -10 -67 -47 -146 -109 -45 -36 -57 -42 -65 -30 -5 8 -7 18 -6 23 3 9 178 155 187 155 3 0 14 -7 25 -15z m77 -52 l28 -18 -121 -88 c-110 -81 -122 -87 -136 -73 -15 15 -12 20 37 64 29 26 73 61 97 76 24 15 46 34 49 42 8 19 13 19 46 -3z m82 -51 c3 -4 -49 -50 -115 -100 -98 -76 -123 -90 -134 -81 -13 10 -5 19 43 53 31 23 84 63 117 89 60 47 79 56 89 39z m-431 -88 c36 -49 88 -106 116 -128 59 -47 67 -70 19 -53 -40 14 -172 139 -205 195 -24 41 -25 73 -4 73 5 0 39 -39 74 -87z m457 26 c-105 -89 -201 -160 -212 -157 -14 5 89 89 142 118 19 10 48 32 64 49 16 17 32 28 35 25 3 -3 -10 -19 -29 -35z m495 6 c-129 -109 -203 -153 -285 -170 -43 -9 -39 -4 69 71 102 70 199 123 226 124 17 0 16 -3 -10 -25z m-391 6 c3 -5 -32 -40 -79 -78 -87 -71 -171 -124 -164 -105 4 13 220 192 231 192 4 0 9 -4 12 -9z m110 -32 c-10 -12 -60 -54 -110 -95 -79 -64 -96 -74 -130 -74 l-39 1 34 27 c19 15 71 57 115 95 65 54 87 67 115 67 34 0 34 0 15 -21z m115 8 c-2 -2 -35 -25 -74 -51 l-70 -47 50 46 c47 44 85 67 94 59 2 -2 2 -5 0 -7z m-39 -207 c-8 -5 -19 -10 -25 -10 -5 0 -3 5 5 10 8 5 20 10 25 10 6 0 3 -5 -5 -10z m-446 -25 c30 -9 95 -15 165 -16 92 -1 107 -3 71 -10 -25 -4 -89 -8 -142 -8 -75 -1 -107 3 -142 19 -25 10 -46 22 -46 25 0 10 45 5 94 -10z m-90 -145 c7 -7 -1 -10 -26 -10 -21 0 -41 7 -49 17 -13 15 -11 16 25 10 22 -3 44 -11 50 -17z m-489 -100 c-11 -18 -21 -11 -43 29 -32 57 -27 66 14 21 20 -21 33 -44 29 -50z m55 -30 c0 -5 -7 -10 -16 -10 -8 0 -12 5 -9 10 3 6 10 10 16 10 5 0 9 -4 9 -10z m55 -30 c-3 -5 -10 -10 -16 -10 -5 0 -9 5 -9 10 0 6 7 10 16 10 8 0 12 -4 9 -10z m330 -80 c-27 -12 -35 -12 -35 0 0 6 12 10 28 9 24 0 25 -1 7 -9z m85 6 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z"/> </g> </svg> ',
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
