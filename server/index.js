const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const router = require("./router");
const { bot, chatId } = require("./telegram-bot");

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
  console.log("new connection!");

  socket.on('join', () => {
    console.log("user connected");
    bot.sendMessage(chatId, "user connected");
  })

  socket.on('messages', ({ message, isThisMessageSendByClient }) => {
    console.log(`message: ${message}!`);
    console.log(`isThisMessageSendByClient: ${isThisMessageSendByClient}!`);

    bot.sendMessage(chatId, message);
  })

  socket.on('disconnect', () => {
    console.log("user disconnect");
    bot.sendMessage(chatId, "user disconnect");
  })
})

app.use(router);

server.listen(PORT, () => console.log(`Server started at port: ${PORT}`));