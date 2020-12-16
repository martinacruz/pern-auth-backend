'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.event.belongsTo(models.user)
    }
  };
  event.init({
    name: DataTypes.STRING,
    date: DataTypes.DATE,
    location: DataTypes.STRING,
    time: DataTypes.INTEGER,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'event',
  });
  return event;
};