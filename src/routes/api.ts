import jwt from '../Services/jwt';
import { Router } from 'express'
import UserController from '../controllers/UserController'
import ProjectsController from '../controllers/projectControllers'
import BooksController from '../controllers/booksControllers'
import PostController from "../controllers/postController"

const apiEndpoints = Router();

const userController = new UserController()
const projectController = new ProjectsController()
const booksController = new BooksController()
const postController = new PostController()

const githubController = require('../controllers/githubController');
const trelloController = require('../controllers/trelloController');
const devtoController = require('../controllers/devtoController');
// const habiticaController = require('../controllers/habiticaController');

//Login
apiEndpoints.get('/users',userController.index)
apiEndpoints.post('/users/create',userController.create)
apiEndpoints.put('/users/update',jwt.verify,userController.update)
apiEndpoints.put('/users/update/:id',jwt.verify,userController.update)
apiEndpoints.delete('/users/delete/:id',jwt.verify,userController.delete)
apiEndpoints.post('/users/auth',userController.login)

//Projetos
apiEndpoints.get('/projects', projectController.index);
apiEndpoints.post('/projects',jwt.verify,projectController.addProject);
apiEndpoints.get('/projects/:id', projectController.getProject);
apiEndpoints.delete('/projects/:id',jwt.verify,projectController.delProject);

//books
apiEndpoints.get('/books', booksController.index);
apiEndpoints.post('/books',booksController.addBook);
apiEndpoints.get('/books/:id', booksController.getBook);
apiEndpoints.delete('/books/:id',booksController.delBook);

//Posts
apiEndpoints.get('/posts', postController.index);
apiEndpoints.post('/posts',jwt.verify,postController.addPost);
apiEndpoints.get('/posts/:id', postController.getPost);
apiEndpoints.delete('/posts/:id',jwt.verify,postController.delPost);

export default apiEndpoints;