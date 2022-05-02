import jwt from '../middlewares/jwt';
import { Router } from 'express'
import { UserController } from '../Controllers/User'
import { BookController } from '../Controllers/Books'
import { ProjectController } from '../Controllers/Projects'
import { WebhooksController } from '../Controllers/Webhooks'
import { DiscordController } from '../Controllers/Discord'

const apiEndpoints = Router();

const users = new UserController()
const books = new BookController()
const Projects = new ProjectController()
const webhooks = new WebhooksController()
const discord = new DiscordController()


//User
apiEndpoints.get('/users',users.index)
apiEndpoints.post('/users/create',jwt.validate,users.create)
apiEndpoints.put('/users/update',jwt.validate,users.update)
apiEndpoints.put('/users/update/:id',jwt.validate,users.update)
apiEndpoints.delete('/users/delete/:id',jwt.validate,users.delete)
apiEndpoints.post('/users/auth',users.login)

//Books
apiEndpoints.get('/books',books.index)
apiEndpoints.post('/books', jwt.validate, books.create)
apiEndpoints.get('/books/:id',books.get_book)
apiEndpoints.put('/books/:id', jwt.validate, books.update)
apiEndpoints.delete('/books/:id', jwt.validate, books.delete)

//projects
apiEndpoints.get('/projects',Projects.index)
apiEndpoints.post('/projects', jwt.validate, Projects.create)
apiEndpoints.get('/projects/:id',Projects.get_project)
apiEndpoints.put('/projects/:id', jwt.validate, Projects.update)
apiEndpoints.delete('/projects/:id', jwt.validate, Projects.delete)

//Webhooks
apiEndpoints.post('/webhooks',jwt.validate, webhooks.create)
apiEndpoints.get('/webhooks', jwt.validate, webhooks.get_webhooks)
apiEndpoints.get('/webhooks/:origin', jwt.validate, webhooks.get_webhook)
apiEndpoints.put('/webhooks/:id', jwt.validate, webhooks.update)
apiEndpoints.delete('/webhooks/:id', jwt.validate, webhooks.delete)
apiEndpoints.post('/webhooks/:origin', webhooks.run_webhook)
apiEndpoints.head('/webhooks/:origin', webhooks.validate_webhook)
apiEndpoints.head('/webhooks/:origin/:webhook', webhooks.validate_webhook)
apiEndpoints.post('/webhooks/:origin/:webhook', webhooks.run_webhook)

// apiEndpoints.post('/webhook/devto', (req, res)=>{
//   discord.sendMessage('testes_do_cordeiro','**Webhook do DevTo received!**',res)
//   console.log(req.body)
// })
// apiEndpoints.post('/webhooks/trello', trelloController.cardWebhook); //Receives webhooks notifications
// apiEndpoints.head('/webhooks/trello', trelloController.newWebhook);//Receives webhook creation request

// Discord
apiEndpoints.post("/discord/ping", jwt.validate, discord.sendMessage)

export default apiEndpoints;