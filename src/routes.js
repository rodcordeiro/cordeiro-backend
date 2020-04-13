const express = require('express');
const routes = express.Router();

const projectController = require('./controllers/projectControllers');

routes.get('/', function (req, res){
    return res.send('ok');
})

routes.get('/projects', projectController.index);

module.exports = routes;