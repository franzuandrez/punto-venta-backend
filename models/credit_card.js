'use strict';
module.exports = (sequelize, DataTypes) => {
  const credit_card = sequelize.define('credit_card', {
    card_type: DataTypes.STRING,
    card_number: DataTypes.STRING,
    exp_month: DataTypes.INTEGER,
    exp_year: DataTypes.INTEGER
  }, {});
  credit_card.associate = function(models) {
    // associations can be defined here
  };
  return credit_card;
};