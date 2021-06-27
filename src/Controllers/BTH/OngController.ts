import connection from "../../database/connection";
import { v4 as uuid } from "uuid";
import { Request, Response } from "express";
import { cript } from '../../tools/crypto';
import { UserService, iUser} from "../../Services/User"
import { OngServices,iOng } from "../../Services/BTH/Ongs"

class bthOngController{
    async index(req: Request,res: Response){
        const Ong = new OngServices();
        return await Ong.get_ongs()
            .then(response=>{
                return res.status(200).json(response)
            })
            .catch(err=>{
                return res.status(400).json(err)
            })
    }
    async create(req: Request, res: Response){
        const User = new UserService();        
        const Ong = new OngServices();

        let {name, email, password, number, city, uf} = req.body;
        password = cript(password);
        
        const user_id = await User.create_user({
            username: name,
            email,
            password  
        })
        .then((response : iUser)=>{
            return response.id
        })
        .catch(err=>{
            res.status(400).json(err)
            throw new Error(err)
        })

        const ong = await Ong.create_ong({name, email, number, city, uf,user_id})
            .then((response: iOng)=>{
                return res.status(200).json(response)
            })
            .catch(err=>{
                return res.status(400).json(err)
            })        
    }
    async authenticate(req: Request,res: Response){
        const User = new UserService();
        const Ong = new OngServices();

        let { email, password } : iUser = req.body;
        password = cript(password);
        
        const user : any= await User.login_email( email, password )
         .then((response)=>{
             return response
         })
         .catch(err=>{
             res.status(400).json(err)
             throw new Error("Invalid email or password")
         })
        const ong = await Ong.get_user_ongs(user.id)
         .then(response=>{
             return res.status(200).json({Ong:response,user})
         })
         .catch(err=>{
             return res.status(400).json({err})
         })
        
    }
    
}

export {
    bthOngController
}