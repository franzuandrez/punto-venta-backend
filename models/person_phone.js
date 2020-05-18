'use strict';
module.exports = (sequelize, DataTypes) => {
  const person_phone = sequelize.define('person_phone', {
    business_entity_id: DataTypes.INTEGER,
    phone_number: DataTypes.STRING,
    phone_number_type_id: DataTypes.INTEGER
  }, {});
  person_phone.associate = function(models) {
    // associations can be defined here
  };
  return person_phone;
};