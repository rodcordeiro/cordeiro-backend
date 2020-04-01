const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');

app.use(express.json());
app.use(routes);
app.use(cors());


  
module.exports = app;
  