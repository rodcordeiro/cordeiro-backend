import { Request, Response } from "express";
import { cript } from '../tools/crypto'
import { UserService, iUser} from "../Services/User"

class UserController{
    async index(req: Request, res: Response){
        const services = new UserService();
        const users = await services.list_users()
        return res.status(users.message == "success" ? 200 : 400).json(users)
    }
    async create(req: Request, res: Response){
        const services = new UserService();
        const user = await services.create_user(req.body)
        return res.status(200).json(user)
    }
    async update(req: Request, res: Response){
        const services = new UserService();
        const id = req.params.id ? req.params.id : req.headers.id
        const { username, email, password } = req.body
        const user = await services.update_user({ id,username, email, password })
        return res.status(200).json(user)
    }

    async delete(req: Request, res: Response){
        const services = new UserService();
        const response = await services.delete_user(req.params.id)
        return res.status(response.message == "success" ? 200 : 400).json(response)
        
    }

    async login(req: Request, res: Response){
        const services = new UserService();
        let { username, email, password } : iUser = req.body

        password = cript(password);
        let user;
        if (!username){
            user = await services.login_email(email,password)
        } else {
            user = await services.login_username(username,password)
        }
        console.log({user})
        if (user.message == "failed") return res.status(400).json(user)
        return res.status(200).json(user)
    }
}

export {
    UserController
}