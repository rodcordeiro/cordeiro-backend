import { Router } from 'express';

import apiEndpoints from './api.routes';
import esbEndpoints from './esb.routes';
import ghEndpoints from './gh.routes';

import { readFileSync } from 'fs';
import { resolve } from 'path'

const routes = Router();

routes.use(apiEndpoints); // Import my api endpoints

const pkg = JSON.parse(readFileSync(resolve(__dirname,'../../package.json'),'utf8'))

// Components
import { routes as Fin } from '../components/Fin'
import bthEndpoints from '../components/BeTheHero'

routes.use("/bth",bthEndpoints); // Import Be the Hero endpoints
routes.use(esbEndpoints); // Import Escriba Endpoints
routes.use(ghEndpoints); // Import Github endpoints
routes.use("/fin",Fin)
routes.get('/', function (req, res){
  return res.status(200).json({  
      "version":pkg.version,
      "release note":"Included Escriba endpoints",
    });
})


routes.get('/uni9',(req,res)=>{
    return res.status(200).send('<style>table,td,tr{border:1px solid; border-collapse:collapse;padding: 2px 5px;}</style>\
    <table>\
    <tr><td>Alex Yio Long Lin</td><td>419106053</td><td>Alex.lin@uni9.edu.br</td></tr>\
    <tr><td>Ednaldo Alves Vanderley Junior</td><td>419103769</td><td>nicknamekill.js@uni9.edu.br</td></tr>\
    <tr><td>Fábio Damião Araújo</td><td>419119927</td><td>Araujo.fabio@uni9.edu.br</td></tr>\
    <tr><td>Guilherme Nascimento Pedroso</td><td>419118123</td><td>guilhermepedroso@uni9.edu.br</td></tr>\
    <tr><td>Heder Evangelista da Silva</td><td>419100871</td><td>-</td></tr>\
    <tr><td>João Pedro Nunes Moreira</td><td>419106506</td><td>joao.m@uni9.edu.br</td></tr>\
    <tr><td>Marcos Gabriel Ribeiro Silva</td><td>419112367</td><td>Gabriel.marcos@uni9.edu.br</td></tr>\
    <tr><td>Marlon de Lira Felix</td><td>419117109</td><td>marlon.lira@uni9.Edu.br</td></tr>\
    <tr><td>Rodrigo de Mendonça Cordeiro</td><td>419108124</td><td>rodrigocordeiro@uni9.edu.br</td></tr>\
    ');
  })
  
export default routes;
