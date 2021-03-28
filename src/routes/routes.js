"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jwt_1 = __importDefault(require("../Services/jwt"));
var express_1 = require("express");
var routes = express_1.Router();
var githubController = require('../controllers/githubController');
var trelloController = require('../controllers/trelloController');
var devtoController = require('../controllers/devtoController');
// const habiticaController = require('../controllers/habiticaController');
var UserController = require('../controllers/UserController');
var discord = require('../Services/discord');
var api = require('./api');
var webhooksController_1 = __importDefault(require("../controllers/webhooksController"));
var projectController = require('../controllers/projectControllers');
var booksController = require('../controllers/booksControllers');
var postController = require('../controllers/postController');
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
routes.use(webhooksController_1.default);
routes.get('/', function (req, res) {
    return res.status(200).json({
        "Name": "CordeiroAPI",
        "Version": "2.0.1",
        "releaseNote": "Migration to Typescript"
    });
});
//Discord
// routes.get('/discord', discord.helloMessage)
// routes.post('/discord', discord.helloMessage)
//Github
routes.post('/github/create', jwt_1.default.verify, githubController.createRepo);
routes.delete('/github/delete/:user/:repo', jwt_1.default.verify, githubController.deleteRepo);
routes.get("/github/token", jwt_1.default.verify, githubController.generateToken);
routes.get("/github/validateToken", githubController.validateToken);
//Dev.to
routes.post('/devpost', devtoController.createPost);
// Habitica
// routes.get('/getchallenge', habiticaController.createTask)
routes.get('/uni9', function (req, res) {
    return res.status(200).send('<style>table,td,tr{border:1px solid; border-collapse:collapse;padding: 2px 5px;}</style>\
  <table>\
  <tr><td>Alex Yio Long Lin</td><td>419106053</td><td>Alex.lin@uni9.edu.br</td></tr>\
  <tr><td>Ednaldo Alves Vanderley Junior</td><td>419103769</td><td>nicknamekill.js@uni9.edu.br</td></tr>\
  <tr><td>Fábio Damião Araújo</td><td>419119927</td><td>Araujo.fabio@uni9.edu.br</td></tr>\
  <tr><td>Guilherme Nascimento Pedroso</td><td>419118123</td><td>guilhermepedroso@uni9.edu.br</td></tr>\
  <tr><td>João Moreira</td><td>419106506</td><td>joao.m@uni9.edu.br</td></tr>\
  <tr><td>Marcos Gabriel Ribeiro Silva</td><td>419112367</td><td>Gabriel.marcos@uni9.edu.br</td></tr>\
  <tr><td>Rodrigo de Mendonça Cordeiro</td><td>419108124</td><td>rodrigocordeiro@uni9.edu.br</td></tr>\
  <tr><td>Henrique Pereira da Silva</td><td>420200693</td><td>jobhenrique.silva@uni9.edu.br</td></tr>');
});
module.exports = routes;
