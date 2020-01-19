'use strict';
module.exports = (sequelize, DataTypes) => {
  const shopping_cart_item = sequelize.define('shopping_cart_item', {
    shopping_cart_item_id: DataTypes.INTEGER,
    shopping_cart_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER
  }, {});
  shopping_cart_item.associate = function(models) {
    // associations can be defined here
  };
  return shopping_cart_item;
};