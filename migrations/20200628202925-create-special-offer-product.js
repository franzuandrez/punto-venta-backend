'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('special_offer_product', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },

            special_offer_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'special_offer',
                    key: 'special_offer_id'
                }
            },
            product_id: {

                type: Sequelize.INTEGER,
                references: {
                    model: 'product',
                    key: 'product_id'
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
        return queryInterface.dropTable('special_offer_product');
    }
};
