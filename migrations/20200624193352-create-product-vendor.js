'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('product_vendor', {
            product_vendor_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            business_entity_id: {
                type: Sequelize.INTEGER
            },
            product_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'product',
                    key: 'product_id'
                }
            },
            average_lead_time: {
                type: Sequelize.INTEGER
            },
            vendor_id: {
                type: Sequelize.INTEGER
            },
            standard_price: {
                type: Sequelize.DECIMAL
            },
            last_receipent_cost: {
                type: Sequelize.DECIMAL
            },
            last_receipent_date: {
                type: Sequelize.DATE
            },
            min_order_quantity: {
                type: Sequelize.INTEGER
            },
            max_order_quantity: {
                type: Sequelize.INTEGER
            },
            unit_measure_code: {
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
        return queryInterface.dropTable('product_vendor');
    }
};