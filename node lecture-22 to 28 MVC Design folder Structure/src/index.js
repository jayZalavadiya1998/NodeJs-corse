const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT
const { admin_router } = require('./Routers/adminrouter')
const { mongoose } = require('./config/DatabseConfig')





// app.post('/admin', (req, res) => {
//     console.log(req.body)
//     res.status(200).json({
//         msg: "ohk"
//     })
// })

app.use(admin_router)



app.listen(PORT, () => {
    console.log("Server Start On Port :-", PORT)
    mongoose
})