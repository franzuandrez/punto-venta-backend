'use strict';
module.exports = (sequelize, DataTypes) => {
    const employee_departament_history = sequelize.define('employee_departament_history', {
        business_entity_id: DataTypes.INTEGER,
        departament_id: DataTypes.INTEGER,
        shift_id: DateTypes.INTEGER,
        start_date: DateTypes.DATETIME,
        end_date: DateTypes.DATETIME
    }, {});
    employee_departament_history.associate = function (models) {
        // associations can be defined here
    };
    return employee_departament_history;
};