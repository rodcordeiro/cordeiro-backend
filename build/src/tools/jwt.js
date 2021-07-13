"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.default = {
    signin: function (id) {
        return jsonwebtoken_1.default.sign({ id: id }, process.env.APP_SECRET, { expiresIn: "15 days" });
    },
    validate: function (req, res, next) {
        var token = req.headers.token;
        if (!token)
            return res.status(401).json({ message: "You must provide a token" });
        jsonwebtoken_1.default.verify(token, process.env.APP_SECRET, function (err, decoded) {
            if (err)
                return res.status(500).json({ auth: err.name, message: err.message });
            req.headers.id = decoded.id;
            next();
        });
    }
};
