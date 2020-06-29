'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('sales_reason_header_sales_reasons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      sales_order_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'sales_order_headers',
          key: 'sales_order_id'
        }
      },
      sales_reason_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'sales_reasons',
          key: 'sales_reason_id'
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
    return queryInterface.dropTable('sales_reason_header_sales_reasons');
  }
};
