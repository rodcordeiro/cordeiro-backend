const express = require("express");
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const routes = require('./routes');

app.use(express.json());
app.use(cors());
app.use(routes);

module.exports = app;
