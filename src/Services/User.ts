import connection from "../database/connection";
import { v4 as uuid } from "uuid";
import { cript } from '../tools/crypto'
import jwt from "../tools/jwt"

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
        let { username, email, password } : iUser = data
        password = cript(password);
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
                    console.log({user})
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
        return await connection('users')
            .select("*")
            .then((response: Array<iUser>)=>{
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
    async update_user(data: iUser){
        let { id,username, email, password } : iUser = data
        if (password) password = cript(password);
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
                if(!user || user.email !== email || user.password !== password) {
                    reject("Invalid email or password")
                }
                let token = jwt.signin(user.id)
                resolve({
                    id: user.id,email,token
                })
            } catch(e){
                reject(e)
            }
        })
    }
    async login_username(username: string, password: string){
        return new Promise(async (resolve, reject)=>{
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
                if(!user || user.username !== username || user.password !== password) {
                    reject("Invalid username or password")
                }
                let token = jwt.signin(user.id)
                resolve({
                    token
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