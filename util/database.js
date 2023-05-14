const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'new_schema',
    password: 'Mohit@12345'
});

module.exports = pool.promise();