const express = require('express');
const cors = require('cors');
const pool = require("./model")
const bcrypt = require('bcrypt');
const jwt  = require('jsonwebtoken')

require('dotenv').config();

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
        const user = jsonUsers.find(user => user.username === username)
        if (user == null) {
            return res.status(404).send('Cannot Find User')
        }
        try {
            if (await bcrypt.compare(password, user.password)) {
                const token = jwt.sign({loggedin: true}, process.env.JWTOKEN)
                res.json({success: true, token: token})
            }
            else {
                res.status(500).send(console.log('Login Failed'))
            }
        } catch {
            res.status(500).send()
        }
    } catch (err) {
        console.log(err.message)
    }
})

app.post('/update', (req, res) => {
    try {
        const { username, password, newPassword } = req.body;
        const updateInfo = pool.query("UPDATE userinfo SET password = 'newTestPass' WHERE username = 'testuser'")

        res.send("Updated")
    } catch (err) {
        err.message
    }
})

app.get('/auth', (req, res) => {
    try {
        const token = req.headers['authorization']

        const verified = jwt.verify(token, process.env.JWTOKEN)

        res.json(verified)
    } catch (err) {
        console.log(err.message)
    }
})

app.listen(port, () => {
    console.log("Express Running")
})