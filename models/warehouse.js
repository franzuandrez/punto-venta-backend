'use strict';
module.exports = (sequelize, DataTypes) => {
    const warehouse = sequelize.define('warehouse', {
        warehouse_id: DataTypes.INTEGER,
        name: DataTypes.STRING
    }, {});
    warehouse.associate = function (models) {
        //warehouse.belongsToMany(models.inventory, {through: 'warehouse_id', as: 'warehouse'});
        warehouse.belongsToMany(models.section, {through: 'warehouse_id', as: 'warehouse'});
    };
    return warehouse;
};