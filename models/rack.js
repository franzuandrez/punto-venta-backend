'use strict';
module.exports = (sequelize, DataTypes) => {
    const rack = sequelize.define('rack', {
        rack_id: DataTypes.INTEGER,
        name: DataTypes.STRING,
        corridor_id: DataTypes.INTEGER
    }, {});
    rack.associate = function (models) {
        rack.hasMany(models.inventory, {through: 'rack_id', as: 'rack'});
        rack.hasMany(models.level, {through: 'rack_id', as: 'rack'});
    };
    return rack;
};