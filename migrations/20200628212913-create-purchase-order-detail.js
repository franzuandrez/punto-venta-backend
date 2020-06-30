'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('purchase_order_details', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            purchase_order_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'purchase_order_header',
                    key: 'purchase_order_id'
                }
            },
            due_date: {
                type: Sequelize.DATE
            },
            order_quantity: {
                type: Sequelize.INTEGER
            },
            product_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'product',
                    key: 'product_id'
                }
            },
            unit_price: {
                type: Sequelize.DECIMAL
            },
            line_total: {
                type: Sequelize.DECIMAL
            },
            received_quantity: {
                type: Sequelize.DECIMAL
            },
            rejected_quantity: {
                type: Sequelize.DECIMAL
            },
            stocked_quantity: {
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
        return queryInterface.dropTable('purchase_order_details');
    }
};
