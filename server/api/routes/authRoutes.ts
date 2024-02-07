import UserController from "@controllers/authController";
const bcryptjs = require("bcryptjs");
const express = require("express");
const router = express.Router();

router.post("/register", UserController.register);

router.post("/login", UserController.login);

export default router;
