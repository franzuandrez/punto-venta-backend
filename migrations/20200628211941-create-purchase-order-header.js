'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('purchase_order_header', {
            purchase_order_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            status: {
                type: Sequelize.STRING
            },
            employee_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'employee',
                    key: 'employee_id'
                }
            },
            vendor_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'vendor',
                    key: 'vendor_id'
                }
            },
            ship_method_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'ship_method',
                    key: 'ship_method_id'
                }
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
        return queryInterface.dropTable('purchase_order_header');
    }
};
