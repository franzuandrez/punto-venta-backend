'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('employee_departament_history', {
            employee_departament_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            business_entity_id: {
                type: Sequelize.INTEGER
            },
            employee_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'employee',
                    key: 'employee_id'
                }
            },
            departament_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'department',
                    key: 'id'
                }
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
        return queryInterface.dropTable('employee_departament_history');
    }
};