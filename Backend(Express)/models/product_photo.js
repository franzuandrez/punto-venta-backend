'use strict';
module.exports = (sequelize, DataTypes) => {
  const product_photo = sequelize.define('product_photo', {
    product_photo_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    file_name: DataTypes.STRING,
    path: DataTypes.STRING
  }, {});
  product_photo.associate = function(models) {
    // associations can be defined here
  };
  return product_photo;
};