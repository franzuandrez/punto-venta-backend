'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('person_credit_card', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      business_entity_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'business_entity',
          key:'business_entity_id'
        }
      },
      credit_card_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'credit_card',
          key:'credit_card_id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('person_credit_card');
  }
};
