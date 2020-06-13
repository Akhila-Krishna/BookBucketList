'use strict';
module.exports = (sequelize, DataTypes) => {
  const book = sequelize.define('book', {
    bookname:{
        allowNull: false,
        type: DataTypes.STRING
      },
    authorname:{
      allowNull: false,
      type: DataTypes.STRING
    }, 
  }, {});
  book.associate = function(models) {
    // associations can be defined here
  models.book.belongsTo(models.user,{foreignKey:'userID'})

  };
  return book;
};