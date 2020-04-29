const express = require('express');
const routes = express.Router();

const projectController = require('./controllers/projectControllers');
const githubController = require('./controllers/githubController');

const discord = require('./Services/discord');
const unirest = require('unirest');
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
routes.post('/webhook/devto', (req, res)=>{
  discord.sendMessage('testes_do_cordeiro','**Webhook do DevTo received!**')
  console.log(req.body)
})
routes.post('/webhooks/trello', (req, res)=>{
  console.log(req.body)
  return response.status(204)
})
routes.head('/webhooks/trello', (req, res)=>{
  
  console.log(req.body)
  return response.status(204)
})

//Dev.to
routes.post('/devpost', (req,res)=>{
  unirest.post("https://dev.to/api/articles")
   .headers({
   "content-type": "application/json",
   "api-key": req.headers.key
   })
   .type("json")
   .send(req.body)
   .then((response) =>{
       if (response.statusCode ===201) discord.sendMessage('taverna_do_vader',`Hey guys, new post:\n **${response.body.title}**\n${response.body.description}\n\n${response.body.url}`);
       return res.status(response.statusCode).json(response.body)
   });
})


module.exports = routes;