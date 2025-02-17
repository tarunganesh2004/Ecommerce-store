import mysql from "mysql2"
import dotenv from "dotenv"

dotenv.config();


const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

export const connectDB = () => {
    db.connect((err) => {
        if (err) {
            console.error("Database connection failed: " + err.message);
        } else {
            console.log("Connected to MySQL database");
        }
    });
};

export default db;