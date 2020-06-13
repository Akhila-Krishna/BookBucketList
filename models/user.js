'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    username:{
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING
      },
      password:{
        allowNull:false,
        type: DataTypes.STRING
        },
    fname: DataTypes.STRING,
    lname: DataTypes.STRING  
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  

  };
  return user;
};

