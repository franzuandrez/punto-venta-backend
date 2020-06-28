'use strict';
module.exports = (sequelize, DataTypes) => {
  const special_offer_product = sequelize.define('special_offer_product', {
    special_offer_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER
  }, {});
  special_offer_product.associate = function(models) {
    // associations can be defined here
  };
  return special_offer_product;
};