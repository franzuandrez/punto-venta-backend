'use strict';
module.exports = (sequelize, DataTypes) => {
  const business_entity = sequelize.define('business_entity', {
    business_entity_id: DataTypes.INTEGER
  }, {});
  business_entity.associate = function(models) {
    // associations can be defined here
  };
  return business_entity;
};