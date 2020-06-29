'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('sales_person', {
      sales_person_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      business_entity_id: {
        type: Sequelize.INTEGER
      },
      territory_id: {
        type: Sequelize.INTEGER
      },
      sales_quota: {
        type: Sequelize.DECIMAL
      },
      bonus: {
        type: Sequelize.DECIMAL
      },
      commission_pct: {
        type: Sequelize.DECIMAL
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
    return queryInterface.dropTable('sales_persson');
  }
};
