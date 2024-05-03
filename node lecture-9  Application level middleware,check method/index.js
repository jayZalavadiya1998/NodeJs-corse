const express = require('express')
const app = express()

require('dotenv').config()
const PORT = process.env.PORT


app.use((req, res, next) => {
    console.log(req.method)
    if (req.method != 'POST') {
        res.status(200).json({ "Error": "Not Allow to " + req.method + " method" })
    }
    else {
        next()
    }
})

app.post('/checkmethord', (req, res) => {
    res.json({ "your_password_is": "123@#44ddd" })
})

app.listen(PORT, () => {
    console.log("Server start on " + PORT)
})