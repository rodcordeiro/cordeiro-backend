import express from "express";
import cors from "cors";
import routes from './routes/routes';
import { createServer } from 'http';
import { Server, Socket } from "socket.io"
import  morgan  from 'morgan';
import dotenv from "dotenv";
dotenv.config();

const corsOptions = {
  "origin": true,
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "optionsSuccessStatus": 204
}

const app = express();

app.use(express.json());

if(process.env.NODE_ENV =="development"){
  app.use(morgan('dev'))
}
  
app.use(cors(corsOptions));
app.use(routes);

const http = createServer(app); // Criando o protocolo HTTP
const io = new Server(http,{
  cors:{
    "origin": true,
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "optionsSuccessStatus": 204
  }
}); // Criando o protocolo WS (websocket)

// io.on("connection",(socket: Socket)=>{
//   console.log(socket.id)
// })

export {
  http, 
  io
}