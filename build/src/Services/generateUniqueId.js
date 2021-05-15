"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUniqueId = void 0;
var crypto_1 = __importDefault(require("crypto"));
function generateUniqueId() {
    return crypto_1.default.randomBytes(10).toString();
}
exports.generateUniqueId = generateUniqueId;
