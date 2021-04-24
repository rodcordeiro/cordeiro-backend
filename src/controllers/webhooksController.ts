import connection from '../database/connection';
import discord from '../Services/discord'
import trelloController from '../controllers/trelloController'
import { Request, Response } from 'express'

class WebhooksController{
    async create(req: Request, res: Response){
        const {name, origin, webhook} = req.body;
        await connection('webhooks')
            .insert({name, origin, webhook})
            .then(response=>{
                return res.status(201).json(response)
            })
        .catch(err=>{
            throw new Error(err);
            return res.status(400).json(err)
        })
    }
    async get_webhooks(req: Request, res: Response){
        await connection('webhooks')
            .select('*')
            .then(response => {
                return res.status(200).json(response)
            })
            .catch(err=>{
                return res.status(400).json(err)
            })    
    }
    async get_webhook(req: Request, res: Response){
        const { origin } = req.params;
        await connection('webhooks')
            .select('*')
            .where('origin',origin)
            .then(response=>{
                return res.status(200).json(response)
            })
            .catch(err=>{
                return res.status(400).json(err)
            })
    }
}



//Webhooks
routes.post('/webhooks/habitica', discord.habiticaMessage)
routes.post('/webhook/devto', (req, res)=>{
  discord.sendMessage('testes_do_cordeiro','**Webhook do DevTo received!**')
  console.log(req.body)
})
routes.post('/webhooks/trello', trelloController.cardWebhook); //Receives webhooks notifications
routes.head('/webhooks/trello', trelloController.newWebhook);//Receives webhook creation request

export default WebhooksController;