import { discordApi } from '../tools/api'
import { WebhookServices, iWebhook } from '../Services/Webhook'

interface iDiscordMessage{
    channel ?: string
    message :string
}

class DiscordService{
    
    async send_message(channel: string, message: string) : Promise<any>{
        
        return new Promise(async (resolve,reject)=>{
            const wservices = new WebhookServices();      
            let hook : any = await wservices.get_webhook_by_name(channel)
                .then((response: iWebhook)=>{
                    return response.webhook
                })
                .catch((error) => reject(error) )
            await discordApi.post(hook,{
                "content": message,
                "username":"RodRobo",
                "avatar_url": "https://rodcordeiro.github.io/shares/img/rodrobo.jpg"
            })
            .then(response=>{
                resolve(response)
            })
            .catch(err=>{
                reject(err)
            });
        })
    }
}

export {
    iDiscordMessage,
    DiscordService
}