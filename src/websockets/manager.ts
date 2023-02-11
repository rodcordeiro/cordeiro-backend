import { io } from '../app';
import { Socket } from 'socket.io';

import './chat';

io.on('connect', (socket: Socket) => {
  console.log({
    status: 'connected',
    id: socket.id,
  });
});
