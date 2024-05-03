const express = require('express')
const app = express()
const multer = require('multer')
require('dotenv').config()
const PORT = process.env.PORT


const savedphotos = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './photos')
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, file.fieldname + file.originalname)
    }
})


const datasaved = multer({ storage: savedphotos })

app.post('/mongo', datasaved.single('anyfile'), (req, res) => {
    res.status(200).json({
        ok: "Saved your data"
    })
})

app.listen(PORT, () => {
    console.log("server start on port no :-" + PORT)
})