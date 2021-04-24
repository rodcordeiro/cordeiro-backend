import connection from '../database/connection';
import { Request, Response } from 'express'
const generateUniqueId = require("../Services/generateUniqueId");

export default class PostController{
    async index (req: Request, res: Response){
        await connection('posts')
          .select('*')
          .then(response=>{
            return res.status(200).json(response);
          })
          .catch(err=>{
            return res.status(404).json(err);
          })
    }
    async addPost (req: Request, res: Response){
      const {title,text,image,tags} = req.body
      await connection('posts')
        .insert({title,text,image,tags})
        .then(response=>{
          return res.status(201).json()
        })
        .catch(err=>{
          return res.status(401).json(err.message)
        })          
    }
    async getPost (req: Request, res: Response){
      const {id} = req.params;
      await connection('posts')
          .select('*')
        .where('id',id)
        .then(response=>{
          return res.status(200).json(response)
        })
        .catch(err=>{
          return res.status(500).json(err)
        })
      
  }
    async delPost (req: Request, res: Response){
      const {id} = req.params;
      await connection('posts')
        .where('id',id)
        .delete()
        .then(response=>{
          return res.status(200).json()
        })
        .catch(err=>{
          return res.status(500).json(err)
        })
      
  }
  
}