const express = require('express')
const app = express()

require('dotenv').config()
const PORT = process.env.PORT

const { body, validationResult } = require('express-validator')


app.use(express.json())
app.post('/student', body('Email').isEmail(), (req, res) => {
    const Errors = validationResult(req)


    if (!Errors.isEmpty()) {
        res.status(400).json({ "Err": Errors.array() })
    }
    res.status(200).json({ "FinalValue": "fff kkk" })
})

app.listen(PORT, () => {
    console.log('Server Start on ' + PORT)
})