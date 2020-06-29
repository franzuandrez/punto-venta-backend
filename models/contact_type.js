'use strict';
module.exports = (sequelize, DataTypes) => {
  const contact_type = sequelize.define('contact_type', {
    name: DataTypes.STRING
  }, {});
  contact_type.associate = function(models) {
    // associations can be defined here
  };
  return contact_type;
};