import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const isProd = process.env.NODE_ENV === "production";

export const db = await mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
 ssl: isProd
    ? {
        rejectUnauthorized: false,   // REQUIRED FOR RENDER
      }
    : false,
});
