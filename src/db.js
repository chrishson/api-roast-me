const Pool = require('pg').Pool;
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: 'postgres',
    port: 5432,
    password: process.env.DB_PASSWORD
})

module.exports = pool;