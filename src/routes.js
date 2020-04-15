const express = require('express');
const routes = express.Router();

const projectController = require('./controllers/projectControllers');

const api = require ('./Services/axios');
const discord = require('./Services/discord');
routes.get('/', function (req, res){
    return res.status(200).json({
        "Name": "CordeiroAPI",
        "Version": "1.0"
      });
})

routes.get('/projects', projectController.index);


routes.post('/habitica', discord.sendMessage)

routes.post('/discord', discord.sendMessage)
module.exports = routes;