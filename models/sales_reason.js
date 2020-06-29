'use strict';
module.exports = (sequelize, DataTypes) => {
  const sales_reason = sequelize.define('sales_reason', {
    name: DataTypes.STRING,
    reason_type: DataTypes.STRING
  }, {});
  sales_reason.associate = function(models) {
    // associations can be defined here
    sales_reason.hasMany(models.sales_order_header_sales_reason, {through: 'sales_reason_id', as: 'sales_reason'});

  };
  return sales_reason;
};
