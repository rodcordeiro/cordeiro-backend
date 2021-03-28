import jwt from '../Services/jwt';
import { Router } from 'express'
const routes = Router();

import trelloController from '../controllers/trelloController'
import webhooksController from '../controllers/webhooksController'

import discord from '../Services/discord'


routes.get('/webhooks', (req, res)=>{
  console.log('teste')
  return res.status(400).send()
})
routes.post('/webhooks', webhooksController.create)
routes.get('/webhooks/:origin', webhooksController.get_webhooks)

export default routes;