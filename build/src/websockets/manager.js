"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../app");
require("./chat");
app_1.io.on("connect", (socket) => {
    console.log({
        status: "connected",
        id: socket.id
    });
});
