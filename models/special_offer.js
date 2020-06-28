'use strict';
module.exports = (sequelize, DataTypes) => {
  const special_offer = sequelize.define('special_offer', {
    special_offer_id: DataTypes.INTEGER,
    description: DataTypes.STRING,
    discount_pct: DataTypes.DECIMAL,
    type: DataTypes.STRING,
    category: DataTypes.STRING,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    min_qty: DataTypes.INTEGER,
    max_qty: DataTypes.INTEGER
  }, {});
  special_offer.associate = function(models) {
    // associations can be defined here
  };
  return special_offer;
};