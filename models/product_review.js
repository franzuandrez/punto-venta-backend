'use strict';
module.exports = (sequelize, DataTypes) => {
  const product_review = sequelize.define('product_review', {
    product_review_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    reviewer_name: DataTypes.STRING,
    reviewer_date: DataTypes.DATE,
    email_address: DataTypes.STRING,
    rating: DataTypes.STRING,
    comments: DataTypes.STRING
  }, {});
  product_review.associate = function(models) {
    // associations can be defined here
  };
  return product_review;
};