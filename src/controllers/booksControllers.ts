import connection from '../database/connection';
import { Request, Response } from 'express'

interface iBook{
  id: number
  title: string
  author: string
  serie: string | null;
}
export default class BooksController{
    async index (req: Request, res: Response) {
      await connection('books')
        .select('*')
        .orderBy('serie','asc')
        .then(function(response: Array<iBook>){
          const total =  response.length
          return res.status(200).header('total-books',total.toString()).json(response)
        })
        .catch(err=>{
          return res.status(400).json(err)
        })
    }
    async addBook (req: Request, res: Response){
      const { title,author,serie } = req.body
      await connection('books')
        .insert({ title,author,serie })
        .then(response=>{
          return res.status(201).json()
        })
        .catch(err=>{
          return res.status(400).json(err)
        })
    }
    async getBook (req: Request, res: Response) {
      const {id} = req.params;
      await connection('books')
        .select('*')
        .where("id",id)
        .then(response=>{
          return res.status(200).json(response)
        })
        .catch(err=>{
          return res.status(400).json(err)
        })
  }
  async delBook (req: Request, res: Response) {
    const {id} = req.params;
    await connection('books')
      .where("id",id)
      .delete()
      .then(response=>{
        return res.status(200).json(response)
      })
      .catch(err=>{
        return res.status(400).json(err)
      })
}
  
}