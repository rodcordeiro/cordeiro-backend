import jwt from '../Services/jwt';
import { Router } from 'express';

import BTHOngController from '../controllers/bth_ongsController';

const bth_routes = Router();

const bth_ong_Controller = new BTHOngController();

bth_routes.get('/ongs', bth_ong_Controller.index);
bth_routes.post('/ongs', jwt.verify, bth_ong_Controller.create);

export default bth_routes;
