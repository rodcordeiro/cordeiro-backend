import jwt from '../Services/jwt';
import DiscordController from '../Services/discord';
import { Router } from 'express';

import webhookRoutes from './webhooks'
import apiEndpoints from './api'


const routes = Router();
routes.use(webhookRoutes)
routes.use(apiEndpoints)

const githubController = require('../controllers/githubController');
const trelloController = require('../controllers/trelloController');
const devtoController = require('../controllers/devtoController');
const discord = new DiscordController();




routes.get('/', function (req, res){
    return res.status(200).json({
        "Name": "CordeiroAPI",
        "Version": "2.0.1",
        "releaseNote":"Migration to Typescript"
      });
})

// Discord
routes.get('/discord', discord.helloMessage)
routes.post('/discord', discord.helloMessage)

//Github
routes.post('/github/create',jwt.verify,githubController.createRepo);
routes.delete('/github/delete/:user/:repo',jwt.verify,githubController.deleteRepo);
routes.get("/github/token",jwt.verify,githubController.generateToken)
routes.get("/github/validateToken",githubController.validateToken)


//Dev.to
routes.post('/devpost', devtoController.createPost)


// Habitica
// routes.get('/getchallenge', habiticaController.createTask)

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



export default routes;
