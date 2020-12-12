const express = require('express');
const routes = express.Router();
const jwt = require('../Services/jwt');

const projectController = require('../controllers/projectControllers');
const booksController = require('../controllers/booksControllers');
const postController = require('../controllers/postController');
const githubController = require('../controllers/githubController');
const trelloController = require('../controllers/trelloController');
const devtoController = require('../controllers/devtoController');
const UserController = require('../controllers/UserController');

const discord = require('../Services/discord');

const webhooks = require('./webhooks')

routes.get('/', function (req, res){
    return res.status(200).json({
        "Name": "CordeiroAPI",
        "Version": "1.5.1",
        "releaseNote":"Update trello Webhook controller"
      });
})

//Login
routes.get('/users',UserController.index)
routes.post('/users/create',jwt.verify,UserController.create)
routes.put('/users/update',jwt.verify,UserController.update)
routes.put('/users/update/:id',jwt.verify,UserController.update)
routes.delete('/users/delete/:id',jwt.verify,UserController.delete)
routes.post('/users/auth',UserController.login)

//Projetos
routes.get('/projects', projectController.index);
routes.post('/projects',jwt.verify,projectController.addProject);
routes.get('/projects/:id', projectController.getProject);
routes.delete('/projects/:id',jwt.verify,projectController.delProject);

//books
routes.get('/books', booksController.index);
routes.post('/books',booksController.addBook);
routes.get('/books/:id', booksController.getBook);
routes.delete('/books/:id',booksController.delBook);

//Posts
routes.get('/posts', postController.index);
routes.post('/posts',jwt.verify,postController.addPost);
routes.get('/posts/:id', postController.getPost);
routes.delete('/posts/:id',jwt.verify,postController.delPost);

//Discord
routes.get('/discord', discord.helloMessage)
routes.post('/discord', discord.helloMessage)

//Github
routes.post('/github/create',jwt.verify,githubController.createRepo);
routes.delete('/github/delete/:user/:repo',jwt.verify,githubController.deleteRepo);
routes.get("/github/token",jwt.verify,githubController.generateToken)
routes.get("/github/validateToken",jwt.verify,githubController.validateToken)


//Dev.to
routes.post('/devpost', devtoController.createPost)

routes.get('/uni9',(req,res)=>{
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
})

routes.use(webhooks)

module.exports = routes;
