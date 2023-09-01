require('dotenv').config();
const mysql = require('mysql2');
const db = mysql.createConnection(
    {
        // host: process.env.REACT_APP_AWS_DB_HOST,
        // user: process.env.REACT_APP_AWS_DB_USER,
        // password: process.env.REACT_APP_AWS_DB_PASSWORD,
        // database: process.env.REACT_APP_AWS_DB_NAME,
        // port: process.env.REACT_APP_AWS_DB_PORT
        host: 'kiaboyzdb.cejycvzf4iiu.us-east-2.rds.amazonaws.com',
        user: 'CMolitor',
        password: 'Zxcft654es',
        database: 'kiaboyzdb',
        port: 3306
    },
);
db.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });
  

module.exports = db;
