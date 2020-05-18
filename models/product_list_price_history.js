'use strict';
module.exports = (sequelize, DataTypes) => {
  const product_list_price_history = sequelize.define('product_list_price_history', {
    product_id: DataTypes.INTEGER,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    list_price: DataTypes.INTEGER
  }, {});
  product_list_price_history.associate = function(models) {
    // associations can be defined here
  };
  return product_list_price_history;
};