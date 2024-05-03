const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT
const DATABASEURL = process.env.DATABASEURL
const mongoose = require('mongoose')


const connectdb = async () => {
    await mongoose.connect(DATABASEURL)
}

const finaldbconnctError = connectdb()

finaldbconnctError.then(() => {
    console.log("connected To Dataabase")

    const Creatmodel = mongoose.model("Anoopam mission", { name: String })

    const anoopamData = new Creatmodel({ name: 'sahebji maharaj' })
    const poro = anoopamData.save()
    poro.then(() => {
        console.log("saved Data")
    }).catch()

}).catch((Error) => {
    console.log("Error", Error)
})