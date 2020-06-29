'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('employee', {
      employee_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      business_entity_id: {
        type: Sequelize.INTEGER
      },
      national_id_number: {
        type: Sequelize.STRING
      },
      login_id: {
        type: Sequelize.INTEGER
      },
      job_title: {
        type: Sequelize.STRING
      },
      birth_date: {
        type: Sequelize.DATE
      },
      marital_status: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      hired_date: {
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
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
    return queryInterface.dropTable('employee');
  }
};