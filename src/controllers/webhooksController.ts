import connection from '../database/connection';
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

export default WebhooksController;