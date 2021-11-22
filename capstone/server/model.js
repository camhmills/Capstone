require('dotenv').config()

const Pool = require('pg').Pool;

const devConfig = `postgres://${process.env.USER}:${process.env.PASSWORD}@${process.env.SERVER}:${process.env.PORT}/${process.env.USER}`

const pool = new Pool({
    user: process.env.USER,
    host: process.env.SERVER,
    database: process.env.USER,
    password: process.env.PASSWORD,
    port: 5432
});



module.exports = pool;