const express = require('express');
const routes = express.Router();
const jwt = require('../Services/jwt');
const discord = require('../Services/discord');

const trelloController = require('../controllers/trelloController');

//Webhooks
routes.post('/webhooks/habitica', discord.habiticaMessage)
routes.post('/webhook/devto', (req, res)=>{
  discord.sendMessage('testes_do_cordeiro','**Webhook do DevTo received!**')
  console.log(req.body)
})
routes.post('/webhooks/trello', trelloController.cardWebhook); //Receives webhooks notifications
routes.head('/webhooks/trello', trelloController.newWebhook);//Receives webhook creation request

module.exports = routes;