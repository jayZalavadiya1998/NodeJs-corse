const mongoose = require('mongoose');
const { admnin_data } = require('../../modal(schema)/adminschema/adminschema');
const { validationResult } = require('express-validator');


const admin_controlles = (req, res) => {


    const define_data = new admnin_data(req.body)


    const Error = validationResult(req)

    Error.isEmpty()
        ?
        define_data.save().then((result) => {
            res.status(200).json({
                msg: "sved data Admin router done"
            })
            console.log("sved data", result)
        }).catch((err) => {
            console.log("ERROR ==>not saved data", err)

        })
        :
        res.status(400).json({
            msg: "validation Error",
            Error: Error
        })




}


module.exports = { admin_controlles }