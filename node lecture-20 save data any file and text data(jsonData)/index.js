const express = require('express')
const app = express()
const multer = require('multer')
const ff = require('dotenv').config()
const PORT = process.env.PORT


const stor = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './photos')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const finalstor = multer({ storage: stor })

app.post('/student', finalstor.single('fephotos'), (req, res) => {
    res.status(200).send({
        msg: "ok"
    })
})




app.listen(PORT, () => {
    console.log('Server Start on Port:-' + PORT)
})