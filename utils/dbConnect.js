//import mysql from 'mysql2';
import mysql from'mysql2/promise';

 const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_PORT,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});//Create a connection pool
export default pool;