import mysql from "mysql2";
import * as dotenv from "dotenv";
dotenv.config();

export const db = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "Nineteen19!",
  DB: "prop_db",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

// module.exports = {
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