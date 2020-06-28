'use strict';
module.exports = (sequelize, DataTypes) => {
  const ship_method = sequelize.define('ship_method', {
    ship_method_id: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  ship_method.associate = function(models) {
    // associations can be defined here
  };
  return ship_method;
};