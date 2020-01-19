'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('product_review', {
      product_review_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      product_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'product',
          key:'product_id'
        }
      },
      reviewer_name: {
        type: Sequelize.STRING
      },
      reviewer_date: {
        type: Sequelize.DATE
      },
      email_address: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.STRING
      },
      comments: {
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
    return queryInterface.dropTable('product_review');
  }
};