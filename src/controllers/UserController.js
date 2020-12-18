const connection = require("../database/connection");
const generateUniqueId = require("../Services/generateUniqueId");
const cript = require('../Services/crypto');
const jwt = require('../Services/jwt');

module.exports = {
  async index(req,res){
    await connection('users')
      .select("*")
      .then(response=>{
        return res.status(200).json(response)
      })
      .catch(err=>{
        return res.status(400).json(err)
      })
  },
  async create(req,res){
    let { username, email, password } = req.body
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
  },
  async login(req,res){
    let { username, password } = req.body
    password = cript(password);
    let user = await connection('users')
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
    let token = jwt.signin(user.id)
    return res.status(200).json({token})
  },
  async update(req,res){
    let { username, email, password } = req.body
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
    
  },
  async delete(req,res){
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