import jwt from '../middlewares/jwt';
import { Router } from 'express';
import { esbChapters } from '../Controllers/ESB/Chapters';

const esbEndpoints = Router();
const esb_chapters = new esbChapters();

//Chapters
esbEndpoints.get('/esb/chapters', esb_chapters.index);
esbEndpoints.get('/esb/chapters/:id', esb_chapters.search);
esbEndpoints.post('/esb/chapters/create', jwt.validate, esb_chapters.create);
esbEndpoints.put('/esb/chapters/:id', jwt.validate, esb_chapters.update);
esbEndpoints.delete('/esb/chapters/:id', jwt.validate, esb_chapters.delete);

export default esbEndpoints;
