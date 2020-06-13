const express = require('express');
const router = express.Router();
const methods = require('../../methods')

const models = require('../../models');

router.post('/',(req,res)=>{
    console.log("Inside post /login")
    console.log(req.body)
    username = req.body.username;
    password = req.body.password;
    // req.userID = userID;
    // req.
    methods.authentication.authenticateUser(username,password)
    .then(result=>{
        console.log("Logged in")
        console.log(result.token)
        req.token = result.token
        req.session.token = result.token
        req.session.type = result.type
        console.log(result.type)
        res.redirect("/user/home") 
    })
    .catch(err=>{
       
        console.log(err)
     //   res.status(400).json({success : false})
     res.redirect("/?success=false")
    })
})

module.exports = router;