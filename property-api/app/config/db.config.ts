import mysql from "mysql2";
import * as dotenv from "dotenv";
dotenv.config();

export const db = {
  HOST: "database-1.c0ca3ogx2a4h.us-east-1.rds.amazonaws.com",
  USER: "admin",
  PASSWORD: "password",
  DB: "mydb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
// export const db = {
//   HOST: "localhost",
//   USER: "root",
//   PASSWORD: "Nineteen19!",
//   DB: "prop_db",
//   dialect: "mysql",
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// };
