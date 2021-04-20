import jwt from '../Services/jwt';
import { Router } from 'express'

const routes = Router();

const projectController = require('../controllers/projectControllers');
const booksController = require('../controllers/booksControllers');
const postController = require('../controllers/postController');
const UserController = require('../controllers/UserController');


//Login
routes.get('/users',UserController.index)
routes.post('/users/create',jwt.verify,UserController.create)
routes.put('/users/update',jwt.verify,UserController.update)
routes.put('/users/update/:id',jwt.verify,UserController.update)
routes.delete('/users/delete/:id',jwt.verify,UserController.delete)
routes.post('/users/auth',UserController.login)

//Projetos
routes.get('/projects', projectController.index);
routes.post('/projects',jwt.verify,projectController.addProject);
routes.get('/projects/:id', projectController.getProject);
routes.delete('/projects/:id',jwt.verify,projectController.delProject);

//books
routes.get('/books', booksController.index);
routes.post('/books',booksController.addBook);
routes.get('/books/:id', booksController.getBook);
routes.delete('/books/:id',booksController.delBook);

//Posts
routes.get('/posts', postController.index);
routes.post('/posts',jwt.verify,postController.addPost);
routes.get('/posts/:id', postController.getPost);
routes.delete('/posts/:id',jwt.verify,postController.delPost);


export default routes;