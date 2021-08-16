"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Encrypt = exports.decript = exports.cript = void 0;
const crypto_1 = __importDefault(require("crypto"));
class Encrypt {
    constructor() {
        const iv = "xxxxxxx";
        console.log({ iv });
        this.encrypt = crypto_1.default.createCipheriv('des-ede3-cbc', process.env.APP_SECRET, iv);
        this.decrypt = crypto_1.default.createDecipheriv('des-ede3-cbc', process.env.APP_SECRET, iv);
    }
    cript(data) {
        const cipher = this.encrypt;
        let encripted = cipher.update(data, 'utf8', 'hex');
        encripted += cipher.final('hex');
        return encripted;
    }
    decript(data) {
        const cipher = this.decrypt;
        let decripted = cipher.update(data, 'hex', 'utf8');
        decripted += cipher.final('utf8');
        return decripted;
    }
}
exports.Encrypt = Encrypt;
function cript(data) {
    return crypto_1.default.createHmac('sha256', process.env.APP_SECRET)
        .update(data)
        .digest('hex');
}
exports.cript = cript;
function decript(data) {
    return crypto_1.default.createDecipheriv;
}
exports.decript = decript;
