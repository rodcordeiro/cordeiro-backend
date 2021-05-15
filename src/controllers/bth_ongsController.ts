import connection from "../database/connection";
import { v4 as uuid } from "uuid";
import { generateUniqueId } from "../Services/generateUniqueId"
import { Request, Response } from 'express'



export default class BTHOngController {
    async index (req: Request, res: Response) {
      const ongs = await connection('bth_ongs').select('*');
      return res.json(ongs);
    }
    async create(req: Request, res: Response){
      const {name, email, number, city, uf} = req.body;
      const id = uuid();
      const whatsapp = "+55" + number;
      await connection('bth_ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf
      })
  
      return res.json({ id });
    }
  };
  