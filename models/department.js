'use strict';
module.exports = (sequelize, DataTypes) => {
  const department = sequelize.define('department', {
    name: DataTypes.STRING,
    group_name: DataTypes.STRING
  }, {});
  department.associate = function(models) {
    // associations can be defined here
  };
  return department;
};