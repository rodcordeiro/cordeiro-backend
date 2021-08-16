import { DiscordService } from "./Discord"
import { habiAPI } from '../tools/api'

class HabiticaService{
    async webhookHandler(data: any){
        return new Promise(async(resolve,reject)=>{
            if(data.type == "scored" || data.type == "updated" || data.type == "checklistScored"){
                if(data.task.id != "b322a291-87c4-490e-8bf6-2b7087538929"){
                    const task = await habiAPI.get('/tasks/b322a291-87c4-490e-8bf6-2b7087538929',{
                        headers: {
                            'x-api-user': 'c150cf43-bf4a-4c46-8912-9c04f77d3924',
                            'x-api-key': '3a00e702-525c-41f2-a69a-d10b741b0c5c',
                            'x-client': 'c150cf43-bf4a-4c46-8912-9c04f77d3924-cordeiroAPI'
                          }
                    }).then(response=>{
                        return response.data.data
                    })
                    const checklistItems = task.checklist.length
                    let completed : number = 0;
                    
                    task.checklist.map(async (item : any,index: number)=>{
                        if(item.completed){
                            completed++;
                        }
                    }) 
                    if(completed<checklistItems -1){
                        await habiAPI.post(`/tasks/b322a291-87c4-490e-8bf6-2b7087538929/checklist/${task.checklist[completed].id}/score`,{},{
                            headers: {
                                'x-api-user': 'c150cf43-bf4a-4c46-8912-9c04f77d3924',
                                'x-api-key': '3a00e702-525c-41f2-a69a-d10b741b0c5c',
                                'x-client': 'c150cf43-bf4a-4c46-8912-9c04f77d3924-cordeiroAPI'
                              }
                        }).catch(err=>{
                            console.log({err})
                        })
                    } else {
                        await habiAPI.post("/tasks/b322a291-87c4-490e-8bf6-2b7087538929/score/up",{},{
                            headers: {
                                'x-api-user': 'c150cf43-bf4a-4c46-8912-9c04f77d3924',
                                'x-api-key': '3a00e702-525c-41f2-a69a-d10b741b0c5c',
                                'x-client': 'c150cf43-bf4a-4c46-8912-9c04f77d3924-cordeiroAPI'
                              }
                            }).catch(err=>{
                                console.log({err})
                            })
                    }                    
                }
            }


            const discord = new DiscordService();
            await discord.send_message('habitica_news',`**Task ${data.type}**
            task: ${data.task.text}
            description: ${data.task.notes}\n`,{
                username: "Grifo",
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

// tasks id b322a291-87c4-490e-8bf6-2b7087538929
// POST https://habitica.com/api/v3/tasks/:taskId/checklist/:itemId/score
// "checklist": [
//     {
//       "completed": false,
//       "text": "Tarefa 1",
//       "id": "b1566d67-df1f-4d9b-ac08-b08744a9f880"
//     },
//     {
//       "completed": false,
//       "text": "Tarefa 2",
//       "id": "882c0647-1aca-44f6-a951-804f1fae9c8c"
//     },
//     {
//       "completed": false,
//       "text": "Tarefa 3",
//       "id": "e10013ce-82f5-4ef6-ad47-8e6a039923bf"
//     }
//   ],