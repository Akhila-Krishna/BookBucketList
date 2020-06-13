const Promise = require('bluebird');
const models = require('../../models');
const Sequelize = require('sequelize');
var { sequelize } = models;
const bookMethods = {};
const Op = Sequelize.Op;

bookMethods.viewBooks = function(id){
    console.log("inside view Books")
    return new Promise((resolve,reject)=>{
        models.book.findAll({
            where :{
                userID : id
            },
        })
        .then(res=>{
           resolve(res)
        })
        .catch(err=>{
            reject(err)
        })
    }) 
}

bookMethods.addBook = (user,name,author) => {
    return new Promise((resolve, reject) => {
      console.log("inside add book")
        var book ={}
        book.userID = user
        book.bookname = name
        book.authorname = author
        models.book.create(book)
          .then((result) => {
            resolve(result);
          })
          .catch((err) => {
            console.log(err);
            reject(err);
          });
      });
}

bookMethods.removeBook = function(user,book,author){
    return new Promise((resolve,reject) => {
      models.book.destroy({
        raw : true,
        where : {
            userID : user,
            bookname : book,
            authorname : author 
        }})
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
    })
  })
}

module.exports = bookMethods