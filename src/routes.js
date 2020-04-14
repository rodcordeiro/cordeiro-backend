const express = require('express');
const routes = express.Router();

const projectController = require('./controllers/projectControllers');

const api = require ('./Services/axios');

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

routes.post('/discord', async (req,res)=>{
    const msg = `
**New Task:**
    ${req.body.text}
`   
    try{
         return res.status(200).json({message: "Message sent" })

    } catch(error){
        return res.status(400).json({message: "Houston we got a problem"})
    }    
})
module.exports = routes;