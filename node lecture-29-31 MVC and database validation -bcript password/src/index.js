const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT

const { registrationroute } = require('./routers/registrationroute')
const { mongoose } = require('./DB_config/DB_config')

mongoose



app.use(registrationroute)


app.listen(PORT, () => {
    console.log("Server Start On PORT:- ", PORT)
})