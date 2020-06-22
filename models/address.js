'use strict';
module.exports = (sequelize, DataTypes) => {
  const address = sequelize.define('address', {
    address_id: DataTypes.INTEGER,
    address_line_1: DataTypes.STRING,
    address_line_2: DataTypes.STRING,
    city: DataTypes.STRING,
    postal_code: DataTypes.STRING,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT
  }, {});
  address.associate = function(models) {
    // associations can be defined here
  };
  return address;
};