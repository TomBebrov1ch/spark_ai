import jwt from "jsonwebtoken";
import express from "express";

const JWT_SECRET = process.env.JWT_SECRET;

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    return res.status(401).json({ message: "No token provided" });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
      req.user = user;
      next();
    }
  });
};

const app = express();

app.get("/protected", authenticateToken, (req, res) => {
  res.json({ message: "This is a protected route" });
});
