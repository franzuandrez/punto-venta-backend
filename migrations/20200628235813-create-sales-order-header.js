'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('sales_order_headers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      order_date: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.STRING
      },
      online_order_flag: {
        type: Sequelize.STRING
      },
      sales_order_number: {
        type: Sequelize.STRING
      },
      customer_id: {
        type: Sequelize.INTEGER
      },
      sales_person_id: {
        type: Sequelize.INTEGER
      },
      bill_to_address_id: {
        type: Sequelize.INTEGER
      },
      ship_to_address_id: {
        type: Sequelize.INTEGER
      },
      ship_mehtod: {
        type: Sequelize.INTEGER
      },
      payment_type: {
        type: Sequelize.STRING
      },
      subtotal: {
        type: Sequelize.DECIMAL
      },
      tax_ammount: {
        type: Sequelize.DECIMAL
      },
      freigth: {
        type: Sequelize.DECIMAL
      },
      total_due: {
        type: Sequelize.DECIMAL
      },
      comments: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('sales_order_headers');
  }
};