'use strict';
module.exports = (sequelize, DataTypes) => {
  const purchase_order_header = sequelize.define('purchase_order_header', {
    status: DataTypes.STRING,
    employee_id: DataTypes.INTEGER,
    vendor_id: DataTypes.INTEGER,
    ship_method: DataTypes.INTEGER,
    order_date: DataTypes.DATE,
    subtotal: DataTypes.DECIMAL,
    tax_amount: DataTypes.DECIMAL,
    total_due: DataTypes.DECIMAL
  }, {});
  purchase_order_header.associate = function(models) {
    // associations can be defined here
  };
  return purchase_order_header;
};