const express = require('express')
const { adminmid, adminpost, adminparams } = require('./Middlewars/adminMiddlewar')
const app = express()


require('dotenv').config()
const PORT = process.env.PORT

// app.use(express.query())
app.get('/admin', adminmid, (req, res) => {
    res.send(req.query.name)
})



// app.use(express.json())
app.post('/adminpost', adminpost, (req, res) => {
    res.json(req.body)
})

app.use(express.query())
app.get('/adminparams/:id', adminparams, (req, res) => {
    res.send(req.params.id)
})

app.listen(PORT, () => {
    console.log('server start on port ' + PORT)
})
