'use strict';
module.exports = (sequelize, DataTypes) => {
  const address_type = sequelize.define('address_type', {
    address_type_id: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  address_type.associate = function(models) {
    // associations can be defined here
  };
  return address_type;
};