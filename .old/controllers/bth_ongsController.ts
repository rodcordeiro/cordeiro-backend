import connection from '../database/connection';
import { v4 as uuid } from 'uuid';
import { Request, Response } from 'express';
import cript from '../Services/crypto';

export default class BTHOngController {
  async index(req: Request, res: Response) {
    const ongs = await connection('bth_ongs').select('*');
    return res.json(ongs);
  }
  async create(req: Request, res: Response) {
    let { name, email, password, number, city, uf } = req.body;
    const id = uuid();
    password = cript(password);
    const whatsapp = '+55' + number;
    await connection('bth_ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });
    await connection('users')
      .insert({
        name,
        email,
        password,
      })
      .then((response) => {
        return res.status(200).json({ id, user: { response } });
      })
      .catch((err) => {
        return res.status(400).json(err);
      });
  }
}
