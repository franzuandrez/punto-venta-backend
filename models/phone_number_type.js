'use strict';
module.exports = (sequelize, DataTypes) => {
  const phone_number_type = sequelize.define('phone_number_type', {
    phone_numer_type_id: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  phone_number_type.associate = function(models) {
    phone_number_type.belongsToMany(models.person_phone, {through: 'phone_numer_type_id', as: 'person_phone'});
  };
  return phone_number_type;
};