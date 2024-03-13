import { Sequelize } from "sequelize";
import mysql2 from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const options = {
  dialect: "mysql",
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: "mysql",
  dialectModule: "mysql2",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
  logging: false,
};

if (options.dialect === "mysql") {
  options.dialectModule = mysql2;
}

const sequelize = new Sequelize(options);

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

export default sequelize;
