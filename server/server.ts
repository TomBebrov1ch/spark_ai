import "module-alias/register";
import * as dotenv from "dotenv";

// Libraries
require("dotenv").config({ path: ".env" });
const express = require("express");
const bcrypt = require("bcrypt");

// Models
const User = require("@models/userModel");

// Database
const { Pool } = require("pg");

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get("/", (req: any, res: any) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
