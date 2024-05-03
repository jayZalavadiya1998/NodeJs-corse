const { name_Check, Email_Check, password_Check, Boolean_Check, only_number_Check } = require("./common_ validator/common_validator");

const registration_validator = [
    name_Check(),
    Email_Check(),
    password_Check(),
    Boolean_Check(),
    only_number_Check()

]



module.exports = { registration_validator }