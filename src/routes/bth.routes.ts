import jwt from '../tools/jwt';
import { Router } from 'express'
import {bthOngController} from '../Controllers/BTH/OngController'
import { bthIncidentController } from '../Controllers/BTH/IncidentsController'


const bthEndpoints = Router();
const bthOngs = new bthOngController();
const bthIncidents = new bthIncidentController();

//User
bthEndpoints.get('/bth/ongs',bthOngs.index)
bthEndpoints.post('/bth/ongs',bthOngs.create)
bthEndpoints.post('/bth/session',bthOngs.authenticate)

//incidents
bthEndpoints.get('/bth/profile',jwt.validate,bthIncidents.profile_incidents)
bthEndpoints.post('/bth/incidents',jwt.validate,bthIncidents.create_incident)
bthEndpoints.delete('/bth/incidents/:id',jwt.validate,bthIncidents.delete_incident)


export default bthEndpoints;