const express = require('express')
const app = express()

require('dotenv').config()
const PORT = process.env.PORT
app.get('/user/:name', (req, res) => {
    console.log(req.params)

    res.send(req.params.name)
})

app.listen(PORT, () => {
    console.log(`server startting on ${PORT}`)
})