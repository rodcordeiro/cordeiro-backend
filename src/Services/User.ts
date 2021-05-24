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
        const user = await connection('users')
          .insert({
              id,
            username,
            email,
            password
          })
          .then(response=>{
            return {
                id,
                username,
                email
            }
          })
          .catch(err=>{
            return err
          })
        return user
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
        const updated_at = new Date()
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
            return {
                message: "failed",
                error:"Invalid email or password"
            }
        }
        let token = jwt.signin(user.id)
        return {
            message: "success",
            token
        }
    }
    async login_username(username: string, password: string){
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
            return {
                message: "failed",
                error:"Invalid username or password"
            }
        }
        let token = jwt.signin(user.id)
        return {
            message: "success",
            token
        }
    }
    async delete_user(id: string){
        return await connection('users')
        .where("id",id)
        .delete()
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
}

export {
     UserService,
     iUser
    };