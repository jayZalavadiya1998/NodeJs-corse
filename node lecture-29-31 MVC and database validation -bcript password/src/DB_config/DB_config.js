const mongoose = require('mongoose')
require('dotenv').config()



mongoose.connect(process.env.DB_LINK)
    .then((result) => {
        console.log("Connected to Database")
    }).catch((err) => {
        console.log("fild to Database connection")
    });


module.exports = { mongoose }