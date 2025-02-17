import mysql from "mysql2"



const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'nagasai@9',
    database: 'tg'
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