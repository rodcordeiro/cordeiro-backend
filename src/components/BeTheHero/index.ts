import jwt from '../../middlewares/jwt';
import { Router } from 'express'
import {bthOngController} from './Controllers/OngController'
import { bthIncidentController } from './Controllers/IncidentsController'


const bthEndpoints = Router();
const bthOngs = new bthOngController();
const bthIncidents = new bthIncidentController();
//User
bthEndpoints.get('/ongs',bthOngs.index)
bthEndpoints.post('/ongs',bthOngs.create)
bthEndpoints.post('/session',bthOngs.authenticate)

//incidents
bthEndpoints.get('/profile',jwt.validate,bthIncidents.profile_incidents)
bthEndpoints.get('/incidents',bthIncidents.list_incidents)
bthEndpoints.post('/incidents',jwt.validate,bthIncidents.create_incident)
bthEndpoints.delete('/incidents/:id',jwt.validate,bthIncidents.delete_incident)



export default bthEndpoints;