'use strict';
module.exports = (sequelize, DataTypes) => {
    const rack = sequelize.define('rack', {
        rack_id: DataTypes.INTEGER,
        name: DataTypes.STRING,
        corridor_id: DataTypes.INTEGER
    }, {});
    rack.associate = function (models) {
        //rack.belongsToMany(models.inventory, {through: 'rack_id', as: 'rack'});
        rack.belongsToMany(models.level, {through: 'rack_id', as: 'rack'});
    };
    return rack;
};