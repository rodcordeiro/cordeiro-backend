import jwt from '../tools/jwt';
import { Router } from 'express'
import { UserController } from '../Controllers/User'

const apiEndpoints = Router();

const userController = new UserController()

//Login
apiEndpoints.get('/users',userController.index)
apiEndpoints.post('/users/create',userController.create)
apiEndpoints.put('/users/update',jwt.validate,userController.update)
apiEndpoints.put('/users/update/:id',jwt.validate,userController.update)
apiEndpoints.delete('/users/delete/:id',jwt.validate,userController.delete)
apiEndpoints.post('/users/auth',userController.login)

export default apiEndpoints;