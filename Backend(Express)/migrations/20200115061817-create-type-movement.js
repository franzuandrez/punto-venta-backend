'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        const Type_movements = queryInterface.createTable('type_movement', {
            type_movement_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.INTEGER
            },
            factor: {
                type: Sequelize.INTEGER
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
        /*Type_movements.associate = models => {
            Type_movements.hasMany(models.Inventory,{foreignKey: 'type_movement_id'});
        };*/
        return Type_movements;
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('type_movement');
    }
};