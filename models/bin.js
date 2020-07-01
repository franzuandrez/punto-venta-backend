'use strict';
module.exports = (sequelize, DataTypes) => {
    const bin = sequelize.define('bin', {
        bin_id: DataTypes.INTEGER,
        name: DataTypes.STRING,
        position_id: DataTypes.INTEGER
    }, {});
    bin.associate = function (models) {
        bin.hasMany(models.inventory, {through: 'bin_id', as: 'bin'});
        bin.belongsTo(models.position, {through: 'position_id', as: 'position'});
    };
    return bin;
};
