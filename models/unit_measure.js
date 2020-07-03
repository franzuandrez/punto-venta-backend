'use strict';
module.exports = (sequelize, DataTypes) => {
  const Unit_measure = sequelize.define('Unit_measure', {
    unit_measure_code: {
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    name: DataTypes.STRING,
  }, {});
  Unit_measure.associate = function(models) {
    // associations can be defined here
  };
  return Unit_measure;
};