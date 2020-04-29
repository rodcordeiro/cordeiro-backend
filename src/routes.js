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
})
routes.head('/webhooks/trello', (req, res)=>{
  console.log(req.body)
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

curl --request POST \
  --url 'https://api.trello.com/1/webhooks/?callbackURL=http://cordeiro-backend.herokuapp.com/webhooks/trello&idModel=5abbe4b7ddc1b351ef961414&api=607488c51e587df0b240d2cc42d8567f&token=e9858ed631b81a0ac6dae24f1c415ae2b626b3d44c8eb4c398ed9b127206e6f1' \
  --header 'Accept: application/json'