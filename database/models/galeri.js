'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Galeri extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Galeri.init({
    image: DataTypes.STRING,
    title: DataTypes.STRING,
    judul: DataTypes.STRING,
    content: DataTypes.STRING 
  }, {
    sequelize,
    modelName: 'Galeri',
  });
  return Galeri;
};