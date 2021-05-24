"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jwt_1 = __importDefault(require("../tools/jwt"));
var express_1 = require("express");
var User_1 = require("../Controllers/User");
var apiEndpoints = express_1.Router();
var userController = new User_1.UserController();
//Login
apiEndpoints.get('/users', userController.index);
apiEndpoints.post('/users/create', userController.create);
apiEndpoints.put('/users/update', jwt_1.default.validate, userController.update);
apiEndpoints.put('/users/update/:id', jwt_1.default.validate, userController.update);
apiEndpoints.delete('/users/delete/:id', jwt_1.default.validate, userController.delete);
apiEndpoints.post('/users/auth', userController.login);
exports.default = apiEndpoints;
