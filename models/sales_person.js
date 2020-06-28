'use strict';
module.exports = (sequelize, DataTypes) => {
  const sales_person = sequelize.define('sales_person', {
    business_entity_id: DataTypes.INTEGER,
    territory_id: DataTypes.INTEGER,
    sales_quota: DataTypes.DECIMAL,
    bonus: DataTypes.DECIMAL,
    commission_pct: DataTypes.DECIMAL
  }, {});
  sales_person.associate = function(models) {
    // associations can be defined here
  };
  return sales_person;
};