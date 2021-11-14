const express = require('express');
const cors = require('cors');
const pool = require("./model")
const bcrypt = require('bcrypt');
const saltRounds = 5;

var app = express();

app.use(cors());
app.use(express.json());

const port = 3001;

app.post('/registration', async (req, res) => {
    try {
        const { username, password, email } = req.body;
        const newUser = await pool.query("INSERT INTO userinfo (username, password, email) VALUES ($1, $2, $3) RETURNING *", [username, password, email]);
        res.json(newUser)
    } catch (err) {
        console.log(err.message);
    }
    
})

app.listen(port, function () {
    console.log("Express Running")
})