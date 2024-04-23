'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Artikel extends Model {
    static associate(models) {
      // define association here
    }
  }
  Artikel.init({
    
    image: DataTypes.STRING,
    title: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Artikel',
  });
  return Artikel;
};