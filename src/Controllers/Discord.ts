import { Request, Response } from "express";
import { DiscordService, iDiscordMessage } from '../Services/Discord';
import connection from "../database/connection";


class DiscordController{
    async sendMessage(req: Request, res: Response){
        const services = new DiscordService(); 
        
        let { message, channel  } : iDiscordMessage = req.body;
        channel = channel ? channel : "testes_do_cordeiro"
        
        const service = await services.send_message(channel,message)
            .then(response=>{
                return res.status(204).json()
            })
            .catch(err=>{
                return res.status(400).json(err);
            })
    }
    
}

export {
    DiscordController
}