import connection from '../database/connection';
import cript from '../Services/crypto';
import { Request, Response } from 'express'

import jwt from '../Services/jwt';

import iUser from '../interfaces/User';

export default class UserController{
  async index(req: Request, res: Response){
    await connection('users')
      .select("*")
      .then((response: Array<iUser>)=>{
        return res.status(200).json(response)
      })
      .catch(err=>{
        return res.status(400).json(err)
      })
  }
  async create(req: Request, res: Response){
    let { username, email, password } : iUser = req.body
    password = cript(password);
    await connection('users')
      .insert({
        username,
        email,
        password
      })
      .then(response=>{
        return res.status(201).json()
      })
      .catch(err=>{
        return res.status(400).json(err)
      })
  }
  async login(req: Request, res: Response){
    let { username, email, password } : iUser = req.body
    password = cript(password);
    let user;
    if (!username){
      user = await connection('users')
      .select("*")
      .where("email",email)
      .first()
      .then(response=>{
        return response
      })
      .catch(err=>{
        return res.status(400).json(err)
      })
      if(!user || user.email !== email || user.password !== password) return res.status(401).json({error:"Invalid email or password"})
    } else {
      user = await connection('users')
      .select("*")
      .where("username",username)
      .first()
      .then(response=>{
        return response
      })
      .catch(err=>{
        return res.status(400).json(err)
      })
      if(!user || user.username !== username || user.password !== password) return res.status(401).json({error:"Invalid user or password"})
    }
    
    let token = jwt.signin(user.id)
    return res.status(200).json({token})
  }
  async update(req: Request, res: Response){
    let { username, email, password } : iUser = req.body
    const id = req.params.id ? req.params.id : req.headers.id
    password = cript(password);
    await connection('users')
      .update({ username, email, password })
      .where("id",id)
      .then(response=>{
        return res.status(200).json(response)
      })
      .catch(err=>{
        return res.status(400).json(err)
      })
    
  }
  async delete(req: Request, res: Response){
    const { id } = req.params
    await connection('users')
      .where("id",id)
      .delete()
      .then(response=>{
        return res.status(204).send()
      })
      .catch(err=>{
        return res.status(400).json(err)
      })
  }
}

