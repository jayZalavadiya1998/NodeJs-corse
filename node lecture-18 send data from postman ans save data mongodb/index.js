const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const PORT = process.env.PORT
const DATABASEURL = process.env.DATABASEURL


const connectdb = async () => {
    const promiceconnectdb = await mongoose.connect(DATABASEURL)
}
app.use(express.json())
connectdb().then(() => {
    console.log('conncted to Database')


    app.post('/userlist', (req, res) => {
        const schemamain = mongoose.model("main", { name: String })
        const finaldata = new schemamain({ name: req.body.name })
        finaldata.save().then(() => {
            console.log("data saved susscessfully")
        }).catch(() => {
            console.log("Error save data")
        })
        res.status(200).json({
            OK: "Data saved"
        })
    })

}).catch((e) => {
    console.log(e + "Error connction Database")
}).finally()

app.listen(PORT, () => {
    console.log('server start on port:-' + PORT)
})

