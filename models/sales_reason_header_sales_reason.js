'use strict';
module.exports = (sequelize, DataTypes) => {
  const sales_reason_header_sales_reason = sequelize.define('sales_reason_header_sales_reason', {
    sales_order_id: DataTypes.INTEGER,
    sales_reason_id: DataTypes.INTEGER
  }, {});
  sales_reason_header_sales_reason.associate = function(models) {
    // associations can be defined here
  };
  return sales_reason_header_sales_reason;
};