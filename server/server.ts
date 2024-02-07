const express = require("express");
const { Pool } = require("pg");

const app = express();
const port = 4000;

app.use(express.json());
app.get("/", (res: any) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "SPARK_AI",
  password: "2005",
  port: 5432,
});
