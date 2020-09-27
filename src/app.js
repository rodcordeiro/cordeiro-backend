const express = require("express");
const cors = require('cors');
const dotenv = require('dotenv');

const corsOptions = {
    "origin": "*",//"http://localhost:3000",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  }

dotenv.config();

const app = express();
const routes = require('./routes');

app.use(express.json());
app.use(cors(corsOptions));
app.use(routes);

module.exports = app;
