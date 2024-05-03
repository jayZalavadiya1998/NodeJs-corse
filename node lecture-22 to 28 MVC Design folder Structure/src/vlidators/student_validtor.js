const { check } = require("express-validator")

const { Email_Checking, boolean_Checking } = require("./definvalidtors");

const student_validator = [
    Email_Checking(),
    boolean_Checking()
]


module.exports = { student_validator }