'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('sales_order_detail', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sales_order_header_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'sales_order_header',
          key: 'sales_order_id'
        }
      },
      order_quantity: {
        type: Sequelize.DECIMAL
      },
      product_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'product',
          key: 'product_id'
        }
      },
      special_offer_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'special_offer',
          key: 'special_offer_id'
        }
      },
      unit_price: {
        type: Sequelize.DECIMAL
      },
      unit_price_discount: {
        type: Sequelize.DECIMAL
      },
      line_total: {
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
    return queryInterface.dropTable('sales_order_detail');
  }
};
