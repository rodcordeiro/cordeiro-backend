import { io } from '../app';
import { Socket } from "socket.io"

console.log("imported")
io.on("connect",(socket: Socket)=>{
    console.log({
        status: "connected",
        id:socket.id
    })
    socket.on("client_first_access", async (params) => {
        console.log(params)
      })
})