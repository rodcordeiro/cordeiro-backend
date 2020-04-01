const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    const body = req.body;
    return res.json({
      'Message': 'Working'
    });
  });

routes.get('/info', (req, res) => {
    return res.json({
        'Name': 'Rodrigo Cordeiro',
    });
})

module.exports = routes;