const mysql = require('mysql');
const db = mysql.createConnection({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PWD,
    database: process.env.DB_DATABASE 
});


module.exports = { db };