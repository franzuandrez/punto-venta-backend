'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('employee_departament_historie', {
            business_entity_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            departament_id: {
                type: Sequelize.INTEGER
            },
            shift_id: {
                type: Sequelize.INTEGER
            },
            start_date: {
                type: Sequelize.DATETIME
            },
            end_date: {
                type: Sequelize.DATETIME
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
        return queryInterface.dropTable('employee_departament_historie');
    }
};