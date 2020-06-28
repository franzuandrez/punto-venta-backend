'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('employee_departament_histories', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            business_entity_id: {
                type: Sequelize.INTEGER
            },
            departament_id: {
                type: Sequelize.INTEGER
            },
            start_date: {
                type: Sequelize.DATE
            },
            end_date: {
                type: Sequelize.DATE
            },
            shift_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'shift',
                    key: 'shift_id'
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
        return queryInterface.dropTable('employee_departament_histories');
    }
};