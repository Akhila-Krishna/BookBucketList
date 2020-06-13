const express = require('express')
const router = express.Router()
const methods = require('../../methods')
const models = require('../../models')

router.post('/', (req,res) => {
    if(req.body.password == req.body.confirm) {
    methods.authentication.registerUser(req.body)
    res.redirect("/success");
    }
    else {
        res.redirect("/signup?success=false")
    }
})

module.exports = router;