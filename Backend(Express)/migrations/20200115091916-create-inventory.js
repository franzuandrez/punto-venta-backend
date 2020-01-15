'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Inventory', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            product_id: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            warehouse_id: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            section_id: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            corridor_id: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            rack_id: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            level_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references:{
                    model:'level',
                    key:'level_id'
                }
            },
            position_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'position',
                    key: 'position_id'
                }
            },
            bin_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'bin',
                    key: 'bin_id'
                }
            },
            type_movement_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'type_movement',
                    key: 'type_movement_id'
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
        return queryInterface.dropTable('Inventory');
    }
};