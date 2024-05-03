const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT
const { body, validationResult } = require('express-validator')


app.use(express.json())
app.post('/customError',
    body('password')
        .isLength({ min: 5 })
        .withMessage("Password is not valid for minmum 5 digit")
        .matches('123zxc')
        .withMessage("Password Not Approval without 123zxc"),
    body('name')
        .isLength({ min: 3 })
        .withMessage('name is minimum charactar is 3')
    , (req, res) => {
        const Error = validationResult(req)
        if (!Error.isEmpty()) {
            res.status(200).json(Error)
        }
        res.status(400).json({ passL: "all ok" })
    })


app.listen(PORT, () => {
    console.log('Server Start on Port :- ' + PORT)
})