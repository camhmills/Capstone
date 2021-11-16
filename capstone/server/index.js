const express = require('express');
const cors = require('cors');
const pool = require("./model")
const bcrypt = require('bcrypt');

var app = express();

app.use(cors());
app.use(express.json());

const port = 3001;

app.post('/registration', async (req, res) => {
    try {
        const { username, password, email } = req.body;
        const hashPass = await bcrypt.hash(password, 10)
        const newUser = await pool.query("INSERT INTO userinfo (username, password, email) VALUES ($1, $2, $3)", [username, hashPass, email]);

        res.json(newUser)
    } catch (err) {
        console.log(err.message);
    }
    
})

app.delete('/deleteuser', async (req, res) => {
    try {
        const { username } = req.body;
        const delUser = await pool.query("DELETE FROM userinfo WHERE username = ($1)", [username]);
        res.json(delUser)
    } catch (err) {
        console.log(err.message);
    }
    
})

app.post('/userlogin', async (req, res) => {
    try {
        const { username, password } = req.body;
        const userinfo = await pool.query("SELECT * FROM userinfo")
        const jsonUsers = userinfo.rows
        const user = jsonUsers.find(user => user.username == username)
        if (user == null) {
            return res.status(400).send('Cannot Find User')
        }
        try {
            if (await bcrypt.compare(password, user.password)) {
                res.status(200).send(console.log('Success'))
            }
            else {
                res.status(404).send(console.log('Login Failed'))
            }
        } catch {
            res.status(500).send()
        }
    } catch (err) {
        console.log(err.message)
    }
})

app.listen(port, function () {
    console.log("Express Running")
})