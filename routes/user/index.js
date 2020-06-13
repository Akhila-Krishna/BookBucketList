const express = require('express')
const router = express.Router()
const models = require('../../models')
const methods = require('../../methods')

router.get("/home", (req,res) => {
    methods.user.getUserDetails(req.decoded.id)
    .then(result => {
        var id = result.dataValues.username
        methods.book.viewBooks(id)
        .then(re => {
            res.render("home",{title:"Home",user:result,book:re})
        })
    })   
})

router.post("/add", (req,res) => {
    methods.user.getUserDetails(req.decoded.id)
    .then(result => {
        var id = result.dataValues.username
        var book = req.body.book
        var author = req.body.author
        methods.book.addBook(id,book,author)
        .then(re => {
            res.redirect("/user/home")
        })
    })    
})

router.post("/remove", (req,res) => {
    methods.user.getUserDetails(req.decoded.id)
    .then(result => {
        var id = result.dataValues.username
        var book = req.body.book
        var author = req.body.author
        methods.book.removeBook(id,book,author)
        .then(re => {
            res.redirect("/user/home")
        })
    })    
})

module.exports = router;