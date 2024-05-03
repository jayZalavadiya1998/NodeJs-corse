const express = require('express')
const app = express()
const multer = require('multer')
const cloudinary = require('cloudinary')
require('dotenv').config()
const PORT = process.env.PORT

const dd = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
}
)



const uplod = multer({ storage: dd })


app.post('/user', uplod.single('myfile'), (req, res) => {
    res.status(200).json({
        msg: "ohk"
    })
})


app.listen(PORT, () => {
    console.log('Server Starting On Port:-', PORT)
})