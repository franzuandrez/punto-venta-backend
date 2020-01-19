'use strict';
module.exports = (sequelize, DataTypes) => {
  const product_cost_history = sequelize.define('product_cost_history', {
    product_id: DataTypes.STRING,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    standard_cost: DataTypes.INTEGER
  }, {});
  product_cost_history.associate = function(models) {
    // associations can be defined here
  };
  return product_cost_history;
};