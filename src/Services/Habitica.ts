import { DiscordService } from "./Discord"
class HabiticaService{
    async webhookHandler(data: any){
        return new Promise(async(resolve,reject)=>{
            const discord = new DiscordService();
            await discord.send_message('testes_do_cordeiro',`**Task ${data.type}**
task: ${data.task.text}
description: ${data.task.notes}\n`,)
                .then(response=>{
                    console.log(response)
                    resolve("")
                })
                .catch(err=>{
                    console.log(err)
                    reject(err)
                })
        })
    }
}
export {
    HabiticaService
};