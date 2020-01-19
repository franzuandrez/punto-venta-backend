'use strict';
module.exports = (sequelize, DataTypes) => {
  const product_subcategory = sequelize.define('product_subcategory', {
    product_subcategory_id: DataTypes.INTEGER,
    product_category_id: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  product_subcategory.associate = function(models) {
    // associations can be defined here
  };
  return product_subcategory;
};