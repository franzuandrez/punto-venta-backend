'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('person_phone', {
      person_phone_id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      business_entity_id: {
        type: Sequelize.INTEGER,
        references: {
          model:'business_entity',
          key:'business_entity_id'
        }
      },
      phone_number: {
        type: Sequelize.STRING
      },
      phone_number_type_id: {
        type: Sequelize.INTEGER,
        references: {
          model:'phone_number_type',
          key:'phone_number_type_id'
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
    return queryInterface.dropTable('person_phone');
  }
};