'use strict';
module.exports = (sequelize, DataTypes) => {
  const purchase_order_detail = sequelize.define('purchase_order_detail', {
    purchase_order_header_id: DataTypes.INTEGER,
    due_date: DataTypes.DATE,
    order_quantity: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    unit_price: DataTypes.DECIMAL,
    line_total: DataTypes.DECIMAL,
    received_quantity: DataTypes.DECIMAL,
    rejected_quantity: DataTypes.DECIMAL,
    stocked_quantity: DataTypes.DECIMAL
  }, {});
  purchase_order_detail.associate = function(models) {
    // associations can be defined here
  };
  return purchase_order_detail;
};