'use strict';
module.exports = (sequelize, DataTypes) => {
  const shift = sequelize.define('shift', {
    shift_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE
  }, {});
  shift.associate = function(models) {

  };
  return shift;
};
