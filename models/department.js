'use strict';
module.exports = (sequelize, DataTypes) => {
  const department = sequelize.define('department', {
    name: DataTypes.STRING,
    group_name: DataTypes.STRING
  }, {});
  department.associate = function(models) {
    department.belongsToMany(models.employee_departament_history, {through: 'id', as: 'employee_departament_history'});
  };
  return department;
};