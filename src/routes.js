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
  discord.sendMessage('**Webhook do DevTo received!**')
  console.log(req.body)
})

//Dev.to
routes.post('/devpost', (req,res)=>{
  unirest.post("https://dev.to/api/articles")
   .headers({
   "content-type": "application/json",
   "api-key": "KDLqvK3FqiU78P1sg22EuzNK"
   })
   .type("json")
   .send({
    "article": {
      "title": "Webhook testing - 013",
      "published": false,
      "body_markdown": "Test of webhook ",
      "tags": [
        "api",
        "todayilearned",
        "showdev"
      ],
      "series": "Integrating API's"
    }
  })
   .then((response) =>{
       if (response.error) throw new Error(response.error);
       discord.sendMessage(response.body.url)
       return res.status(response.statusCode).json(response.body)
   });
})


module.exports = routes;