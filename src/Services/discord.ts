import { Request, Response } from 'express'
import { discordApi } from './api'

//PATHs
const testes_do_cordeiro = process.env.WH_testes_do_cordeiro
const taverna_do_vader = process.env.WH_taverna_do_vader;
const icnt = process.env.WH_ICNT;
const todo = process.env.WH_TODO;

export default class DiscordController{
  async helloMessage(req: Request, res: Response){
    await discordApi.post(testes_do_cordeiro,{
                "content": "Heeey,\nHell yeah I'm alive!! Yep, be proud :smiley:.",
                "username":"Lord Darth Vader",
                "avatar_url": "https://rodcordeiro.github.io/shares/img/vader.png"
            })
            .then(function (response: any) {
                return res.status(response.status).json(response.body)
            })
            .catch(err=>{
                return res.status(err.status).json(err)
            });
    }
  async sendMessage(channel: any,template: any,res: any){
        if (channel == 'testes_do_cordeiro') channel = testes_do_cordeiro;
        if (channel == 'taverna_do_vader') channel = taverna_do_vader;
        if (channel == 'icnt') channel = icnt;
        if (channel == 'todo') channel = todo;

        await discordApi.post(channel,{
                "content": `${template}`,
                "username":"Lord Darth Vader",
                "avatar_url": "https://rodcordeiro.github.io/shares/img/vader.png"
            })
            .then(function (response: any) {
                if (response.error) throw new Error(response.error);
                return res.status(response.status).send();
            });
        return true;
    }
    async habiticaMessage(req: Request, res: Response){
        await discordApi.post(testes_do_cordeiro,{
                "content": `**Task ${req.body.type}**
                task: ${req.body.task.text}
                description: ${req.body.task.notes}\n`,
                "username":"Lord Darth Vader",
                "avatar_url": "https://rodcordeiro.github.io/shares/img/vader.png"
            })
            .then(function (response) {
                return res.status(response.status).json(response.data)
            });
        return true;
    }

}
