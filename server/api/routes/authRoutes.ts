import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "@models/userModel"; // Adjust the import path as necessary
import UserController from "@controllers/authController";

const JWT_SECRET = process.env.JWT_SECRET;

const router = express.Router();
const saltRounds = 10;

router.post("/register", UserController.register);

router.post("/login", UserController.login);

export default router;
