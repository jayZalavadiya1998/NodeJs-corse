const mongoose = require('mongoose')
require('dotenv').config()
const MONGO_URL = process.env.MONGO_URL
mongoose.connect(
    MONGO_URL

).then((result) => {
    console.log("connected To Database")

}).catch((err) => {
    console.log("not connected ERROR", err)
});


module.exports = { DB_mongoose: mongoose }