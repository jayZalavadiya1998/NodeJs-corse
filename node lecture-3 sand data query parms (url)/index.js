const express = require('express')
const app = express()

app.get('/popo', (req, res) => {
    console.log(req.query)
    res.status(200).send('hello poo poo')
})


app.get('/jojo', (req, res) => {
    console.log(req.query)
    res.json(req.query.name)
})

app.listen(2000)

//hint url :- localhost:2000?name=value&name=value
// pass data on query string 