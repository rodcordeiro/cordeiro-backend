const express = require("express");
const cors = require('cors');
const dotenv = require('dotenv');

const corsOptions = {
    "origin": true,
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "optionsSuccessStatus": 204
  }

dotenv.config();

const app = express();
const routes = require('./routes/routes');

app.use(express.json());
app.use(cors(corsOptions));
app.use(routes);

module.exports = app;
