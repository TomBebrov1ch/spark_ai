import express from "express";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "@models/userModel"; // Adjust the import path as necessary
import UserController from "@controllers/authController";

const express = require("express");
const router = express.Router();

router.post("/register", UserController.register);

router.post("/login", UserController.login);

export default router;
