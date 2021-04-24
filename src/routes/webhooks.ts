import jwt from '../Services/jwt';
import { Router } from 'express'
import DiscordController from '../Services/discord';
import trelloController from '../controllers/trelloController'
import WebhooksController from '../controllers/webhooksController'

const webhookRoutes = Router();
const discord = new DiscordController();



const webhooksController = new WebhooksController()

webhookRoutes.post('/webhooks',jwt.verify, webhooksController.create)
webhookRoutes.get('/webhooks', webhooksController.get_webhooks)
webhookRoutes.get('/webhooks/:origin', webhooksController.get_webhook)

webhookRoutes.post('/webhooks/habitica', discord.habiticaMessage)
webhookRoutes.post('/webhook/devto', (req, res)=>{
  discord.sendMessage('testes_do_cordeiro','**Webhook do DevTo received!**',res)
  console.log(req.body)
})
webhookRoutes.post('/webhooks/trello', trelloController.cardWebhook); //Receives webhooks notifications
webhookRoutes.head('/webhooks/trello', trelloController.newWebhook);//Receives webhook creation request

export default webhookRoutes;