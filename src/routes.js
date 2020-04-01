const express = require('express');
const routes = express.Router();

const InfoController = require('./controllers/InfoController');

routes.get('/', (req, res) => {
    return res.json({
      'Message': 'Working'
    });
});

routes.get('/contact', InfoController.index);

module.exports = routes;