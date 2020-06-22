'use strict';
module.exports = (sequelize, DataTypes) => {
  const shift = sequelize.define('shift', {
    shift_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    start_time: DataTypes.DATETIME,
    end_time: DataTypes.DATETIME
  }, {});
  shift.associate = function(models) {
    Type_movement.hasMany(models.employee_departament_history, {through: 'business_entity_id', as: 'inventory'});
  };
  return shift;
};