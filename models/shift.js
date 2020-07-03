'use strict';
module.exports = (sequelize, DataTypes) => {
    const shift = sequelize.define('shift', {
        shift_id: DataTypes.INTEGER,
        name: DataTypes.STRING,
        start_time: DataTypes.DATE,
        end_time: DataTypes.DATE
    }, {});
    shift.associate = function (models) {
        shift.belongsToMany(models.employee_departament_history, {through: 'shift_id', as: 'employee_departament_history'});
    };
    return shift;
};
