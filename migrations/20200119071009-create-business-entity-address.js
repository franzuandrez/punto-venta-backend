'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('business_entity_address', {
            business_address_id: {
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
            address_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'address',
                    key: 'address_id'
                }
            },
            address_type_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'address_type',
                    key: 'address_type_id'
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
        return queryInterface.dropTable('business_entity_address');
    }
};
