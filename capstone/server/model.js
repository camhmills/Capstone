require('dotenv').config()

const Pool = require('pg').Pool;

const devConfig = `postgres://${process.env.USER}:${process.env.PASSWORD}@${process.env.SERVER}:${process.env.PORT}/${process.env.USER}`

const proConfig = { connectionString : process.env.DATABASE_URL}

const pool = new Pool({
    connectionString:
        process.env.NODE_ENV === "production" ? proConfig : devConfig,
});



module.exports = pool;