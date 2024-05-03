const express = require('express')
const { anoopammid } = require('./middlewares/middleware')
const app = express()

require('dotenv').config()
const PORT = process.env.PORT

app.use(express.json())
app.post('/anoopam', anoopammid, (req, res) => {
    res.json(req.body)
})

app.listen(PORT, () => {
    console.log('server start on port no /' + PORT)
})
