'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('sales_order_header', {
      sales_order_id: {
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
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'customer',
          key: 'customer_id'
        }
      },
      sales_person_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'sales_person',
          key: 'sales_person_id'
        }
      },
      bill_to_address_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'address',
          key: 'address_id'
        }
      },
      ship_to_address_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'address',
          key: 'address_id'
        }
      },
      ship_mehtod: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'ship_method',
          key: 'ship_method_id'
        }
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
    return queryInterface.dropTable('sales_order_header');
  }
};
