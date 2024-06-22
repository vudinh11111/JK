const express = require('express');
const router = express.Router();
const mysql = require('mysql');



// MySQL database connection
const db = mysql.createConnection({
    host: '103.200.23.188',
    user: 'watsonio',
    password: 'WQ5*jis8@O6iA8',
    database: 'watsonio_dvv',
    port: 3306,
    charset: 'utf8mb4',
});
