'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('product', {
            product_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            color: {
                type: Sequelize.STRING
            },
            safety_stock_level: {
                type: Sequelize.STRING
            },
            size: {
                type: Sequelize.STRING
            },
            weigth: {
                type: Sequelize.STRING
            },
            product_subcategory_id: {
                type: Sequelize.INTEGER,
                references:{
                    model:'product_subcategory',
                    key:'product_subcategory_id'
                }
            },
            instructions: {
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
        return queryInterface.dropTable('product');
    }
};