import { DiscordService } from "./Discord"
class HabiticaService{
    async webhookHandler(data: any){
        return new Promise(async(resolve,reject)=>{
            console.log({data})
            const discord = new DiscordService();
            await discord.send_message('habitica_news',`**Task ${data.type}**
            task: ${data}`,{
    avatar_url: "https://habitica.com/static/img/melior@3x.fe3b187f.png"
})
                .then(response=>{
                    resolve("")
                })
                .catch(err=>{
                    reject(err)
                })
        })
    }
}
export {
    HabiticaService
};

// `**Task ${data.type}**
// task: ${data.task.text}
// description: ${data.task.notes}\n`