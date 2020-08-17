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



module.exports = routes;
