const express = require('express');
const routes = express.Router();

const projectController = require('./controllers/projectControllers');

routes.get('/', function (req, res){
    return res.status(200).json({
        "Name": "CordeiroAPI",
        "Version": "1.0"
      });
})

routes.get('/projects', projectController.index);


routes.post('/habitica', (req, res) => {
    console.log(req.body);
    return res.status(200).json({
        message:"Webhook received"
    });
})
module.exports = routes;