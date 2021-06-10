import connection from "../../database/connection";
import { v4 as uuid } from "uuid";
import { Request, Response } from "express";
import { cript } from '../../tools/crypto';
import { UserService, iUser} from "../../Services/User"

class bthOngController{
    async index(req: Request,res: Response){
        return res.status(200).send()
    }
    async create(req: Request, res: Response){
        const User = new UserService();
        
        let {name, email, password, number, city, uf} = req.body;
        password = cript(password);
        
        const user_id = await User.create_user({
            username: name,
            email,
            password  
        })
        .then(response=>{
            return response.id
        })

        const id = uuid();
        const whatsapp = "+55" + number;
        
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
              return res.status(200).json({ id,ong:response});
        })
        .catch(err=>{
          return res.status(400).json(err)
        })
        
    }
    async authenticate(req: Request,res: Response){
        const User = new UserService();
        const { email, password } : iUser = req.body;
        
    }
    
}

export {
    bthOngController
}