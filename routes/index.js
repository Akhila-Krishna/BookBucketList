const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize')
const models = require('../models');
const methods = require('../methods')
var { sequelize } = models;
var auth = require('../middlewares/auth')

router.get('/', (req,res) => {
   let s = false;
   if (req.query.success === undefined) {
      s = true;
   }
   res.render('login',{title:"Login",success:s})
})

router.get('/signup',(req,res) => {
   let s = false;
   if (req.query.success === undefined) {
      s = true;
   }
   res.render('signup',{title:"Sign-up",success:s})
})

router.get("/success",(req,res)=>{
   res.render('success',{title:"Success"})
})

router.get('/logout',(req,res)=>{
   req.session.destroy(function(){
     console.log("user logged out.")
  });
  res.redirect('/');
 })

router.use('/user',auth,require('./user/index'))
router.use('/login',require('./authentication/login'))
router.use('/register',require('./authentication/register'))

module.exports = router;