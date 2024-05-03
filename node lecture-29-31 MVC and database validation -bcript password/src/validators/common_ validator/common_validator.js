const { check } = require('express-validator')

const name_Check = () => {
    return check('name', 'Name is require').isString()

}
const Email_Check = () => {
    return check('Email', 'Email is require').isEmail()

}
const password_Check = () => {
    return check('password', 'password is require').isString()

}
const Boolean_Check = () => {
    return check('isadmin', 'Email is require').isBoolean()

}
const only_number_Check = () => {
    return check('role_no', 'role_no is require').isNumeric()

}




module.exports = { name_Check, Email_Check, password_Check, Boolean_Check,only_number_Check }