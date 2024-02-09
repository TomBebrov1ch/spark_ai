import "module-alias/register";
import { createServer } from "http";

// Libraries
const dotenv = require("dotenv").config({ path: ".env" });
const express = require("express");
const bcryptjs = require("bcryptjs");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger-output.json");

// Routes
import authRoutes from "@api/routes/authRoutes";

// Models
const User = require("@models/userModel");

// Database
const { Pool } = require("pg");

const app = express();
const port = process.env.PORT;

const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const ioPort = 7000;

// Socket.IO event handling
io.on("connection", (socket) => {
  console.log("A user connected");
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });

  socket.on("message", (data) => {
    socket.emit("response", data);
  });
});

server.listen(ioPort, () => {
  console.log(`Socket listeting on ${ioPort}`);
});

app.use(express.json());

// Routes:
app.use("/api/auth", authRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req: any, res: any) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
