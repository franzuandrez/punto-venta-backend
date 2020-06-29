'use strict';
module.exports = (sequelize, DataTypes) => {
  const email_address = sequelize.define('email_address', {
    business_entity_id: DataTypes.INTEGER,
    email_address: DataTypes.STRING
  }, {});
  email_address.associate = function(models) {
    // associations can be defined here
  };
  return email_address;
};