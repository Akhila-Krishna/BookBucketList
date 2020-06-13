const Promise = require('bluebird');
const models = require('../../models');
const Sequelize = require('sequelize');
var { sequelize } = models;
const userMethods = {};
const Op = Sequelize.Op;

userMethods.getUserDetails = (userID) => {
    console.log('inside get user details');
    return new Promise((resolve, reject) => {
      models.user.findOne({
        where : {
          username : userID
        }
      })
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  };
  

module.exports = userMethods