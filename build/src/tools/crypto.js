"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Encrypt = exports.decript = exports.cript = void 0;
var crypto_1 = __importDefault(require("crypto"));
var Encrypt = (function () {
    function Encrypt() {
        var iv = "xxxxxxx";
        console.log({ iv: iv });
        this.encrypt = crypto_1.default.createCipheriv('des-ede3-cbc', process.env.APP_SECRET, iv);
        this.decrypt = crypto_1.default.createDecipheriv('des-ede3-cbc', process.env.APP_SECRET, iv);
    }
    Encrypt.prototype.cript = function (data) {
        var cipher = this.encrypt;
        var encripted = cipher.update(data, 'utf8', 'hex');
        encripted += cipher.final('hex');
        return encripted;
    };
    Encrypt.prototype.decript = function (data) {
        var cipher = this.decrypt;
        var decripted = cipher.update(data, 'hex', 'utf8');
        decripted += cipher.final('utf8');
        return decripted;
    };
    return Encrypt;
}());
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
