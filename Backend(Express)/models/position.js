'use strict';
module.exports = (sequelize, DataTypes) => {
    const position = sequelize.define('position', {
        position_id: DataTypes.INTEGER,
        name: DataTypes.STRING,
        level_id: DataTypes.INTEGER
    }, {});
    position.associate = function (models) {
        position.hasMany(models.inventory, {through: 'position_id', as: 'position'});
        position.hasMany(models.bin, {through: 'position_id', as: 'position'});
    };
    return position;
};