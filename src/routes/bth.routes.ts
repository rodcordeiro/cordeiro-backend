import jwt from '../tools/jwt';
import { Router } from 'express'
import {bthOngController} from '../Controllers/BTH/OngController'


const bthEndpoints = Router();
const bthOngs = new bthOngController();

//User
bthEndpoints.get('/bth/ongs',bthOngs.index)
bthEndpoints.post('/bth/ongs',bthOngs.create)
bthEndpoints.post('/bth/session',bthOngs.authenticate)


export default bthEndpoints;