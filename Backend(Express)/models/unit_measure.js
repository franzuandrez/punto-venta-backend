'use strict';
module.exports = (sequelize, DataTypes) => {
  const Unit_measure = sequelize.define('Unit_measure', {
    unit_measure_code: DataTypes.INTEGER,
    name: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {});
  Unit_measure.associate = function(models) {
    // associations can be defined here
  };
  return Unit_measure;
};