import jwt from '../tools/jwt';
import { Router } from 'express'
import { UserController } from '../Controllers/User'
import { BookController } from '../Controllers/Books'

const apiEndpoints = Router();

const userController = new UserController()
const bookController = new BookController()

//User
apiEndpoints.get('/users',userController.index)
apiEndpoints.post('/users/create',userController.create)
apiEndpoints.put('/users/update',jwt.validate,userController.update)
apiEndpoints.put('/users/update/:id',jwt.validate,userController.update)
apiEndpoints.delete('/users/delete/:id',jwt.validate,userController.delete)
apiEndpoints.post('/users/auth',userController.login)

//Books
apiEndpoints.get('/books',bookController.index)
apiEndpoints.post('/books',bookController.create)
apiEndpoints.get('/books/:id',bookController.get_book)
apiEndpoints.delete('/books/:id',bookController.delete)

export default apiEndpoints;