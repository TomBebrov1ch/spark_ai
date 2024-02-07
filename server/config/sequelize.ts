import { Sequelize } from "sequelize";

const sequelize = new Sequelize("SPARK_AI", "postgres", "2005", {
  host: "localhost",
  username: "postgres",
  dialect: "postgres",
  password: "2005",
  port: 5432,
  logging: false,
});

export default sequelize;
