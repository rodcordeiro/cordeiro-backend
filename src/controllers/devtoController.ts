const api = require('../Services/api').devtoApi
import discord from '../Services/discord'
import { Request, Response } from 'express'

module.exports = {
  async createPost(req: Request, res: Response){
    await api.post('articles',req.body,{'Content-Type': 'application/json', 'api-key': req.headers.key})
      .then((response)=>{
        return res.status(response.status).json(response.data);
      })
      .catch(function (error) {
        return res.status(500).json(error);
      });
  }
};
