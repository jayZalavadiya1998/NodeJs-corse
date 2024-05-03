const express = require('express')
const app = express()
const registrationroute = express.Router()
const { registrationcontrol } = require('../controlers/registrationcontrol')
const { registration_validator } = require('../validators/registration_validator')

registrationroute.post('/registration', app.use(express.json()), registration_validator, registrationcontrol)


module.exports = { registrationroute }  