'use strict';
module.exports = (sequelize, DataTypes) => {
  const product_subcategory = sequelize.define('product_subcategory', {
    product_subcategory_id: DataTypes.INTEGER,
    product_category_id: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  product_subcategory.associate = function(models) {
    product_subcategory.belongsTo(models.product, {through: 'product_subcategory_id', as: 'subcategory'});
  };
  return product_subcategory;
};