const express = require('express');
const routes = express.Router();

const projectController = require('./controllers/projectControllers');
const postController = require('./controllers/postController');
const githubController = require('./controllers/githubController');
const trelloController = require('./controllers/trelloController');
const devtoController = require('./controllers/devtoController');

const discord = require('./Services/discord');
const unirest = require('unirest');

routes.get('/', function (req, res){
    return res.status(200).json({
        "Name": "CordeiroAPI",
        "Version": "1.5.1",
        "releaseNote":"Update trello Webhook controller"
      });
})

//Projetos
routes.get('/projects', projectController.index);
routes.post('/projects', projectController.addProject);
routes.delete('/projects', projectController.delProject);

//Posts
routes.get('/posts', postController.index);
routes.post('/posts', postController.addPost);
routes.delete('/posts', postController.delPost);

//Discord
routes.get('/discord', discord.helloMessage)
routes.post('/discord', discord.helloMessage)

//Github
routes.post('/github/create',githubController.createRepo);
routes.delete('/github/delete/:user/:repo',githubController.deleteRepo);
routes.get("/github/token",githubController.generateToken)
routes.get("/github/validateToken",githubController.validateToken)

//Webhooks
routes.post('/webhooks/habitica', discord.habiticaMessage)
routes.post('/webhook/devto', (req, res)=>{
  discord.sendMessage('testes_do_cordeiro','**Webhook do DevTo received!**')
  console.log(req.body)
})
routes.post('/webhooks/trello', trelloController.cardWebhook); //Receives webhooks notifications
routes.head('/webhooks/trello', trelloController.newWebhook);//Receives webhook creation request

//Dev.to
routes.post('/devpost', devtoController.createPost)

routes.get('/uni9',(req,res)=>{
  return res.status(200).send('<style>table,td,tr{border:1px solid; border-collapse:collapse;}</style>\
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

module.exports = routes;
