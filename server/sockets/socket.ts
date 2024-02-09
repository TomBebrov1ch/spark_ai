const { Server } = require("socket.io");

const initializeSocket = (server) => {
  const io = new Server(server);

  io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("joinChat", ({ chatID }) => {
      console.log(`User joined chat: ${chatID}`);
      socket.join(chatID);
    });

    socket.on("chatMessage", ({ chatID, message }) => {
      io.to(chatID).emit("message", message);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });

  return io;
};

module.exports = initializeSocket;
