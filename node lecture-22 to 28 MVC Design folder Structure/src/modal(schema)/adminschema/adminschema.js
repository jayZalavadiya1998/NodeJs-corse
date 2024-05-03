const { DB_mongoose } = require('../../config/DatabseConfig')


const admin_schema = {
    Email: String,
    isadmin: Boolean
}





const admnin_data = DB_mongoose.model("admin_data", admin_schema)


module.exports = { admnin_data }
