'use strict';
module.exports = (sequelize, DataTypes) => {
  const sales_order_detail = sequelize.define('sales_order_detail', {
    sales_order_header_id: DataTypes.INTEGER,
    order_quantity: DataTypes.DECIMAL,
    product_id: DataTypes.INTEGER,
    special_order_id: DataTypes.INTEGER,
    unit_price: DataTypes.DECIMAL,
    unit_price_discount: DataTypes.DECIMAL,
    line_total: DataTypes.DECIMAL
  }, {});
  sales_order_detail.associate = function(models) {
    // associations can be defined here
  };
  return sales_order_detail;
};
