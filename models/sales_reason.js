'use strict';
module.exports = (sequelize, DataTypes) => {
  const sales_reason = sequelize.define('sales_reason', {
    name: DataTypes.STRING,
    reason_type: DataTypes.STRING
  }, {});
  sales_reason.associate = function(models) {
    // associations can be defined here
  };
  return sales_reason;
};