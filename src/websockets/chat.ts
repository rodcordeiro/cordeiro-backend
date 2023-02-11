import { io } from '../app';
import { Socket } from 'socket.io';

io.on('connect', (socket: Socket) => {
  console.log({
    status: 'connected',
    id: socket.id,
  });
  socket.on('registerUser', async (params) => {
    console.log(params);
  });
});
