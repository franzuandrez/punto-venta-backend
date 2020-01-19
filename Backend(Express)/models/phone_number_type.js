'use strict';
module.exports = (sequelize, DataTypes) => {
  const phone_number_type = sequelize.define('phone_number_type', {
    phone_numer_type_id: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  phone_number_type.associate = function(models) {
    // associations can be defined here
  };
  return phone_number_type;
};