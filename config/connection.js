require('dotenv').config();
const mysql = require('mysql2');
const db = mysql.createConnection(
    {
        host: process.env.REACT_APP_AWS_DB_HOST,
        user: process.env.REACT_APP_AWS_DB_USER,
        password: process.env.REACT_APP_AWS_DB_PASSWORD,
        database: process.env.REACT_APP_AWS_DB_NAME,
    },
);

module.exports = db;
