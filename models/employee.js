'use strict';
module.exports = (sequelize, DataTypes) => {
  const employee = sequelize.define('employee', {
    employee_id : DataTypes.INTEGER,
    business_entity_id: DataTypes.INTEGER,
    national_id_number: DataTypes.STRING,
    login_id: DataTypes.INTEGER,
    job_title: DataTypes.STRING,
    birth_date: DataTypes.DATE,
    marital_status: DataTypes.STRING,
    gender: DataTypes.STRING,
    hired_date: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {});


  employee.associate = function (models) {
    employee.belongsTo(models.business_entity, {through: 'business_entity_id', as: 'business_entity'});
    employee.belongsToMany(models.employee_departament_history, {through: 'employee_id', as: 'employee_departament_history'});
  };
  return employee;
};