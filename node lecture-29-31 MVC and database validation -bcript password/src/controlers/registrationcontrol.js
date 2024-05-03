const bcrypt = require('bcrypt')

const { registration_modal } = require('../model(schema)/registrationschema')
const { validationResult } = require('express-validator');



const registrationcontrol = (req, res) => {


    registration_modal.findOne(
        { Email: req.body.Email }
    ).then(is_exists => {
        if (is_exists === null) {
            const saltRounds = 10;

            const encryptpassword = bcrypt.hashSync(req.body.password, saltRounds)

            req.body.password = encryptpassword
            const registration_data = new registration_modal(req.body)

            const isvalid = validationResult(req)
            
            if (isvalid.isEmpty()) {
                registration_data.save().then((result) => {
                    res.status(200).json({ ok: "registration successfully" })
                    console.log("registration successfully")
                }).catch((err) => {
                    res.status(402).json({
                        ok: "registration faild",
                        ERROR: err
                    })
                    console.log("registration faild")
                });
            } else {
                console.log('validation Error', isvalid)
                res.status(402).json({
                    ok: 'validation Error',
                    Error: isvalid
                })
                console.log('validation Error')
            }
        } else {
            res.status(200).json({ Error: " this Email is olrady exits" })
            console.log("data che");
        }
        // Continue with your logic here
    }).catch(err => {
        console.error(err);
        // Handle errors here
    });








}


module.exports = { registrationcontrol }