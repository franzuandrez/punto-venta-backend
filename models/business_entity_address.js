'use strict';
module.exports = (sequelize, DataTypes) => {
  const business_entity_address = sequelize.define('business_entity_address', {
    business_address_id: DataTypes.INTEGER,
    business_entity_id: DataTypes.INTEGER,
    address_id: DataTypes.INTEGER,
    address_type_id: DataTypes.INTEGER
  }, {});
  business_entity_address.associate = function(models) {
  };
  return business_entity_address;
};