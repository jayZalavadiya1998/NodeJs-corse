const { mongoose } = require('../DB_config/DB_config')

const registrationschema = {
    Email: String,
    name: String,
    password: String,
    isadmin: Boolean,
    role_no: Number
}


const registration_modal = mongoose.model("registration", registrationschema)

module.exports = { registration_modal }