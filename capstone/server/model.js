require('dotenv').config()

const Pool = require('pg').Pool;
const pool = new Pool({
    user: process.env.USERNAME,
    host: process.env.SERVER,
    database: process.env.USERNAME,
    password: process.env.PASSWORD,
    port: 5432
});