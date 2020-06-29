'use strict';
module.exports = (sequelize, DataTypes) => {
  const person_credit_card = sequelize.define('person_credit_card', {
    business_entity_id: DataTypes.INTEGER,
    credit_card_id: DataTypes.INTEGER
  }, {});
  person_credit_card.associate = function(models) {
    // associations can be defined here
  };
  return person_credit_card;
};