'use strict';
module.exports = (sequelize, DataTypes) => {
  const address_type = sequelize.define('address_type', {
    address_type_id: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  address_type.associate = function(models) {
    address_type.hasMany(models.business_entity_address, {through: 'address_type_id', as: 'business_entity_address'})
  };
  return address_type;
};