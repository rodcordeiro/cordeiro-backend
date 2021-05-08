"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jwt_1 = __importDefault(require("../Services/jwt"));
var express_1 = require("express");
var UserController_1 = __importDefault(require("../controllers/UserController"));
var projectControllers_1 = __importDefault(require("../controllers/projectControllers"));
var booksControllers_1 = __importDefault(require("../controllers/booksControllers"));
var postController_1 = __importDefault(require("../controllers/postController"));
var apiEndpoints = express_1.Router();
var userController = new UserController_1.default();
var projectController = new projectControllers_1.default();
var booksController = new booksControllers_1.default();
var postController = new postController_1.default();
var githubController = require('../controllers/githubController');
var trelloController = require('../controllers/trelloController');
var devtoController = require('../controllers/devtoController');
// const habiticaController = require('../controllers/habiticaController');
//Login
apiEndpoints.get('/users', userController.index);
apiEndpoints.post('/users/create', userController.create);
apiEndpoints.put('/users/update', jwt_1.default.verify, userController.update);
apiEndpoints.put('/users/update/:id', jwt_1.default.verify, userController.update);
apiEndpoints.delete('/users/delete/:id', jwt_1.default.verify, userController.delete);
apiEndpoints.post('/users/auth', userController.login);
//Projetos
apiEndpoints.get('/projects', projectController.index);
apiEndpoints.post('/projects', jwt_1.default.verify, projectController.addProject);
apiEndpoints.get('/projects/:id', projectController.getProject);
apiEndpoints.delete('/projects/:id', jwt_1.default.verify, projectController.delProject);
//books
apiEndpoints.get('/books', booksController.index);
apiEndpoints.post('/books', booksController.addBook);
apiEndpoints.get('/books/:id', booksController.getBook);
apiEndpoints.delete('/books/:id', booksController.delBook);
//Posts
apiEndpoints.get('/posts', postController.index);
apiEndpoints.post('/posts', jwt_1.default.verify, postController.addPost);
apiEndpoints.get('/posts/:id', postController.getPost);
apiEndpoints.delete('/posts/:id', jwt_1.default.verify, postController.delPost);
exports.default = apiEndpoints;
