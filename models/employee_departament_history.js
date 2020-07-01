'use strict';
module.exports = (sequelize, DataTypes) => {
    const employee_departament_history = sequelize.define('employee_departament_history', {
        employee_departament_id: DataTypes.INTEGER,
        business_entity_id: DataTypes.INTEGER,
        employee_id: DataTypes.INTEGER,
        departament_id: DataTypes.INTEGER,
        start_date: DataTypes.DATE,
        end_date: DataTypes.DATE,
        shift_id: DataTypes.INTEGER
    }, {});
    employee_departament_history.associate = function (models) {

        employee_departament_history.belongsTo(models.departament, {through: 'departament_id', as: 'departament'})
    };
    return employee_departament_history;
};
