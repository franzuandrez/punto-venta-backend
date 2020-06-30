'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('customer', {
            customer_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            business_entity_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'business_entity',
                    key: 'business_entity_id'
                }
            },
            territory_id: {
                type: Sequelize.INTEGER
            },
            number_account: {
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
        return queryInterface.dropTable('customer');
    }
};
