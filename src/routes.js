const express = require('express');
const routes = express.Router();

const projectController = require('./controllers/projectControllers');
const githubController = require('./controllers/githubController');

const discord = require('./Services/discord');

routes.get('/', function (req, res){
    return res.status(200).json({
        "Name": "CordeiroAPI",
        "Version": "1.0"
      });
})

//Projetos
routes.get('/projects', projectController.index);

//Discord
routes.get('/discord', discord.helloMessage)
routes.post('/discord', discord.helloMessage)

//Github
routes.post('/github/create',githubController.createRepo);
routes.delete('/github/delete/:user/:repo',githubController.deleteRepo);

//Webhooks
routes.post('/webhooks/habitica', discord.habiticaMessage)
routes.post('/webhooks/devto', (req, res)=>{
  discord.sendMessage('**Webhook do DevTo received!**')
  console.log(req.body)
})


module.exports = routes;