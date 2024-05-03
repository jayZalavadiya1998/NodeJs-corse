const { check } = require("express-validator")





const Email_Checking = (msg = "Email is require ") => {
    return check('Email', msg).isEmail()
}
const boolean_Checking = (msg = "true False is require ") => {
    return check('isadmin', msg).isBoolean()
}

module.exports = { Email_Checking, boolean_Checking }
