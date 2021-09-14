import connection from "../database/connection";
import { v4 as uuid } from "uuid";
import { Encrypt } from '../tools/crypto'
import jwt from "../middlewares/jwt"

interface iUser{
    id?: any;
    username: string;
    email?: string;
    password: string;
    created_at?: Date;
    updated_at?: Date;
}
interface iResponse{
    message: string;
    data: any
}

class UserService {
    async create_user(data: iUser){
        const { username, email, password } : iUser = data
        const id = uuid()
        return new Promise(async (resolve,reject)=>{
            try {
                const user = await connection('users')
                    .select("*")
                    .where("email",email)
                    .orWhere("username",username)
                    .first()
                    .then(response=>{
                        return response;
                    })
                if (user) {
                    reject("usuário já cadastrado")
                    throw new Error("Invalid user")
                        
                };
                await connection('users')
                    .insert({
                        id,
                        username,
                        email,
                        password
                    })
                    .then(response=>{
                        resolve({
                            id,
                            username,
                            email
                        })
                    })
            } catch (err) {
                reject(err)
            }
        })
    }

    async list_users()  {
        return new Promise(async (resolve, reject)=>{
            await connection('users')
            .select("*")
            .then((response: Array<iUser>)=>{
                resolve(response)
            })
            .catch(err=>{
                reject(err)
            })
        })
    }
    async update_user(data: iUser){
        const cript = new Encrypt();
        
        let { id,username, email, password } : iUser = data
        if (password) password = await cript.cript(password)
            .then(response=>response)
        
        const updated_at = new Date().toISOString();
        return await connection('users')
          .update({ username, email, password,updated_at})
          .where("id",id)
          .then(response=>{
            return {
                message: "success",
                data: response
                }
            })
            .catch(err=>{
                return {
                    message: "failed",
                    data: err
                }
            })
    }
    async login_email(email: string, password: string){
        return new Promise(async (resolve, reject)=>{
            const { compare } = new Encrypt()
            try{
                const user = await connection('users')
                    .select("*")
                    .where("email",email)
                    .first()
                    .then(response=>{
                        return response
                    })
                    .catch(err=>{
                        return false
                    })
                const isValid : boolean = await compare(password,user.password).then(response=>response)
                if(!user || user.email !== email || !isValid) {
                    reject("Invalid email or password")
                }
                let token = jwt.signin(user.id)
                resolve({
                    id: user.id,token
                })
            } catch(e){
                reject(e)
            }
        })
    }
    async login_username(username: string, password: string){
        return new Promise(async (resolve, reject)=>{
            const { compare } = new Encrypt()
            try{
                const user = await connection('users')
                    .select("*")
                    .where("username",username)
                    .first()
                    .then(response=>{
                        return response
                    })
                    .catch(err=>{
                        return false
                    })
                const isValid : boolean = await compare(password,user.password).then(response=>response)
                console.log({user,isValid,password})
                // MUSt FIX USER PWD VALIDATION
                if(!user || user.username !== username ) {
                    reject("Invalid username or password")
                }
                let token = jwt.signin(user.id)
                resolve({
                    id: user.id,token
                })
            } catch(e){
                reject(e)
            }
        })
    }
    async delete_user(id: string){
        return new Promise(async (resolve,reject)=>{
            try{
                const user = await connection('users')
                .where("id",id)
                .delete()
                .then(response=>{
                    resolve(response)
                })
                .catch(error=>{
                    reject({
                        error
                    })
                })
            } catch (e){
                reject(e)
            }
        })
    }

    async find_user_by_email(email : string){
        return new Promise(async (resolve,reject)=>{
            try {
                const user = await connection('users')
                    .select("*")
                    .where("email",email)
                    .first()
                    .then(response=>{
                        resolve({
                            id: response.id,email
                        })
                    })
                    .catch(error=>{
                        reject(error)
                    })
            } catch (err) {
                reject(err)
            }
        })
    }

}

export {
     UserService,
     iUser
    };