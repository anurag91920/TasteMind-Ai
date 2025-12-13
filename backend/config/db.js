import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

export const db = mysql.createPool({
  uri: process.env.DATABASE_URL,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Optional test (non-blocking)
db.getConnection()
  .then(conn => {
    console.log(" MySQL Connected");
    conn.release();
  })
  .catch(err => {
    console.error("MySQL Connection Failed:", err.message);
  });







// import dotenv from "dotenv";

// dotenv.config();

// import mysql from "mysql2/promise";


// const isProd = process.env.NODE_ENV === "production";

// export const db = await mysql.createPool({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME,
//   ssl: isProd
//     ? {
//         rejectUnauthorized: false, // RAILWAY requires this
//       }
//     : false,
// });
