import connection from "../../database/connection";
import { v4 as uuid } from "uuid";
import { response } from "express";

interface iIncident{ 
    title: string
    description: string
    value: string
    ong_id: string
}

class IncidentServices{
    async list_incidents(){
        return new Promise(async (resolve,reject)=>{
            await connection('bth_incidents')
                .select('*')
                .then(response=>{
                    resolve(response)
                })
                .catch(err=>{
                    reject(err)
                })
        })
    }
    async list_incidents_with_pagination(page: any){
        return new Promise(async (resolve,reject)=>{
            const incidents = await connection('bth_incidents')
                .join('bth_ongs', 'bth_ongs.id','=','bth_incidents.ong_id')
                .limit(5)
                .offset((page-1)*5)
                .select([
                    'bth_incidents.*',
                    'bth_ongs.name',
                    'bth_ongs.email',
                    'bth_ongs.whatsapp',
                    'bth_ongs.city',
                    'bth_ongs.uf'
                ])
                .then(response=>{
                    resolve(response)
                })
                .catch(err=>{
                    reject(err)
                })
        })
    }
    async count_incidents(){
        return new Promise(async (resolve,reject)=>{
            await connection('bth_incidents')
                .count('id')
                .then(response=>{
                    resolve(response)
                })
                .catch(err=>{
                    reject(err)
                })
        })
    }

    async list_profile_incidents(ong_id: string){
        return new Promise(async (resolve,reject)=>{
            await connection('bth_incidents')
                .select('*')
                .where('ong_id',ong_id)
                .then(response=>{
                    resolve(response)
                })
                .catch(err=>{
                    reject(err)
                })
        })
    }
    async create_new_incident(data : iIncident){
        return new Promise(async (resolve,reject)=>{
            const { title, description, value, ong_id } = data;
            const [id] :any  = await connection('bth_incidents')
                .insert({
                    title, description, value, ong_id
                })
                .then(response=>{
                    return response
                })
                .catch(err=>{
                    reject(err)
                })
            resolve(id)
        })
    }
    async delete_incident(id: string,ong_id: string){
        return new Promise( async (resolve,reject)=>{
            try{
                await connection('bth_incidents')
                 .where("id",id)
                 .andWhere("ong_id",ong_id)
                 .delete()
                 .then(response=>{
                     resolve(response)
                 })
                 .catch(err=>{
                     reject(err)
                 })
            } catch(err){
                reject(err)
            }
        })
    }
}
export {
    IncidentServices,
    iIncident
}