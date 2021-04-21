import express from "express";
import cors from "cors";
import dotenv from "dotenv";

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

export default app;
