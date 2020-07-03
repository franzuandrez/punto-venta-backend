'use strict';
module.exports = (sequelize, DataTypes) => {
    const Type_movement = sequelize.define('Type_movement', {
        type_movement_id: DataTypes.INTEGER,
        name: DataTypes.INTEGER,
        factor: DataTypes.INTEGER
    }, {});
    Type_movement.associate = function (models) {
        //Type_movement.belongsToMany(models.inventory, {through: 'type_movement_id', as: 'inventory'});
    };
    return Type_movement;
};