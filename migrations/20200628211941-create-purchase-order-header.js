'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('purchase_order_headers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      employee_id: {
        type: Sequelize.INTEGER
      },
      vendor_id: {
        type: Sequelize.INTEGER
      },
      ship_method: {
        type: Sequelize.INTEGER
      },
      order_date: {
        type: Sequelize.DATE
      },
      subtotal: {
        type: Sequelize.DECIMAL
      },
      tax_amount: {
        type: Sequelize.DECIMAL
      },
      total_due: {
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
    return queryInterface.dropTable('purchase_order_headers');
  }
};