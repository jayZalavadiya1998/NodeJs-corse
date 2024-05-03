const express = require('express')
const app = express()
const admin_router = express.Router()
const { student_validator } = require('../vlidators/student_validtor')


const { admin_controlles } = require('../controlles/admincontrolles/admincontrolles')


admin_router.post('/admin', app.use(express.json()), student_validator, admin_controlles)


module.exports = { admin_router }