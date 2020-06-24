'use strict';
module.exports = (sequelize, DataTypes) => {
  const product_vendor = sequelize.define('product_vendor', {
    business_entity_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    average_lead_time: DataTypes.INTEGER,
    vendor_id: DataTypes.INTEGER,
    standard_price: DataTypes.DECIMAL,
    last_receipent_cost: DataTypes.DECIMAL,
    last_receipent_date: DataTypes.DATE,
    min_order_quantity: DataTypes.INTEGER,
    max_order_quantity: DataTypes.INTEGER,
    unit_measure_code: DataTypes.STRING
  }, {});
  product_vendor.associate = function(models) {
    // associations can be defined here
  };
  return product_vendor;
};