import connection from "../database/connection";
import { v4 as uuid } from "uuid";
import { cript } from '../tools/crypto'

interface iWebhook{
    id ?:string
    name: string
    origin?: string
    webhook: string
    created_at?: Date
    updated_at?: Date
}

class WebhookServices{
    async create_webhook(data: iWebhook){
        return new Promise( async (resolve,reject)=>{
            let {name, origin, webhook} = data;
            if(!origin){ origin = webhook}
            await connection('webhooks')
                .insert({name, origin, webhook})
                .then(response=>{
                    resolve({name, origin})
                })
            .catch(err=>{
                reject(err)
            })
        })
    }
    async list_webhooks(){
        return new Promise( async (resolve,reject)=>{
            await connection('webhooks')
                .select('*')
                .then((response: Array<iWebhook>)=>{
                    resolve(response)
                })
            .catch(err=>{
                reject(err)
            })
        })
        
    }
    async list_by_origin(origin: string){
        return new Promise(async (resolve,reject)=>{
            await connection('webhooks')
                .select('*')
                .where('origin',origin)
                .then((response: Array<iWebhook>)=>{
                    resolve(response)
                })
                .catch(err=>{
                    reject(err)
                })
        })
    }
    async get_webhook_by_name(name: string){
        return new Promise(async (resolve,reject)=>{
            await connection('webhooks')
                .select('*')
                .where('name',name)
                .first()
                .then((response: iWebhook)=>{
                    resolve(response)
                })
                .catch(err=>{
                    reject(err)
                })
        })
    }
    async update(data: iWebhook){
        return new Promise( async (resolve, reject)=>{
            let {id, name, origin, webhook} = data;
            const updated_at = new Date().toISOString();
            await connection('webhooks')
               .where({id}) 
                .update({name, origin, webhook,updated_at})
                .then((response)=>{
                    resolve(response)
                })
                .catch(err=>{
                    reject(err)
                })
        })
    }
    async delete(id: number){
        return new Promise(async (resolve, reject)=>{
            await connection('webhooks')
                .where({id})
                .first()
                .delete()
                .then(response=>{
                    resolve(response)
                })
                .catch(err=>{
                    reject(err)
                })
        })
    }
}

export {
    iWebhook,
    WebhookServices
};