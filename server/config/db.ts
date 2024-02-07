import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "SPARK_AI",
  password: "2005",
  port: 5432,
});

export default pool;
