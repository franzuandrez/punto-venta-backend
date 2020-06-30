'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('vendor', {
            vendor_id: {
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
            account_number: {
                type: Sequelize.STRING
            },
            name: {
                type: Sequelize.STRING
            },
            credit_rating: {
                type: Sequelize.INTEGER
            },
            preferred_vendor_status: {
                type: Sequelize.INTEGER
            },
            active_flag: {
                type: Sequelize.INTEGER
            },
            url_web: {
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
        return queryInterface.dropTable('vendor');
    }
};
