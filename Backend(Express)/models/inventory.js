'use strict';
module.exports = (sequelize, DataTypes) => {
    const Inventory = sequelize.define('Inventory', {
        product_id: DataTypes.INTEGER,
        warehouse_id: DataTypes.INTEGER,
        section_id: DataTypes.INTEGER,
        corridor_id: DataTypes.INTEGER,
        rack_id: DataTypes.INTEGER,
        level_id: DataTypes.INTEGER,
        position_id: DataTypes.INTEGER,
        bind_id: DataTypes.INTEGER,
        type_movement_id: DataTypes.INTEGER
    }, {});
    Inventory.associate = function (models) {

    };
    return Inventory;
};