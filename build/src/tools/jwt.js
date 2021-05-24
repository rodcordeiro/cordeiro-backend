"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require('jsonwebtoken');
exports.default = {
    signin: function (id) {
        return jwt.sign({ id: id }, process.env.APP_SECRET, { expiresIn: "15 days" });
    },
    validate: function (req, res, next) {
        var token = req.headers.token;
        if (!token)
            return res.status(401).json({ message: "You must provide a token" });
        jwt.verify(token, process.env.APP_SECRET, function (err, decoded) {
            if (err)
                return res.status(500).json({ auth: err.name, message: err.message });
            req.headers.id = decoded.id;
            next();
        });
    }
};
