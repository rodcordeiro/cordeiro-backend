import connection from "../../database/connection";
import { v4 as uuid } from "uuid";
import { response } from "express";

interface iOng{
    id?: string;
    name: string;
    email: string;
    number?: string;
    whatsapp?: string;
    city: string;
    uf: string;
    user_id?: string;
}

class OngServices{
    async get_ongs(){
        return new Promise(async (resolve,reject)=>{
            try {
                const ongs = await connection('bth_ongs')
                    .select("*")
                    .then((response : Array<iOng>)=>{
                        resolve(response)
                    })
            } catch (err){
                reject(err)
            }
        })
    }
    async create_ong(data : iOng){
        let {
            name,
            email,
            number,
            city,
            uf,
            user_id
          } = data
        const id = uuid();
        const whatsapp = "+55" + number;
        return new Promise(async (resolve,reject)=>{
            try {
                const ong = await connection('bth_ongs').insert({
                    id,
                    name,
                    email,
                    whatsapp,
                    city,
                    uf,
                    user_id
                  })
                  .then(response=>{
                        resolve(response)
                  })
            } catch (error) {
                reject(error)
            }
        })
        
    }
    async get_user_ongs(user_id: string){
        return new Promise(async (resolve,reject)=>{
            try{
                const ong = await connection('bth_ongs')
                .select("*")
                .where("user_id",user_id)
                .first()
                .then(response=>{
                    resolve(response)
                })
                .catch(e=>{
                    reject(e)
                })
            } catch (e){
                reject(e)
            }
        })
    }
}

export {
    iOng,
    OngServices
}