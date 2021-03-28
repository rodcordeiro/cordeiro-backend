"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jwt_1 = __importDefault(require("../Services/jwt"));
var express_1 = require("express");
var routes = express_1.Router();
var projectController = require('../controllers/projectControllers');
var booksController = require('../controllers/booksControllers');
var postController = require('../controllers/postController');
var UserController = require('../controllers/UserController');
//Login
routes.get('/users', UserController.index);
routes.post('/users/create', jwt_1.default.verify, UserController.create);
routes.put('/users/update', jwt_1.default.verify, UserController.update);
routes.put('/users/update/:id', jwt_1.default.verify, UserController.update);
routes.delete('/users/delete/:id', jwt_1.default.verify, UserController.delete);
routes.post('/users/auth', UserController.login);
//Projetos
routes.get('/projects', projectController.index);
routes.post('/projects', jwt_1.default.verify, projectController.addProject);
routes.get('/projects/:id', projectController.getProject);
routes.delete('/projects/:id', jwt_1.default.verify, projectController.delProject);
//books
routes.get('/books', booksController.index);
routes.post('/books', booksController.addBook);
routes.get('/books/:id', booksController.getBook);
routes.delete('/books/:id', booksController.delBook);
//Posts
routes.get('/posts', postController.index);
routes.post('/posts', jwt_1.default.verify, postController.addPost);
routes.get('/posts/:id', postController.getPost);
routes.delete('/posts/:id', jwt_1.default.verify, postController.delPost);
exports.default = routes;
