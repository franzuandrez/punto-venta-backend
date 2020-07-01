'use strict';
module.exports = (sequelize, DataTypes) => {
    const corridor = sequelize.define('corridor', {
        corridor_id: DataTypes.INTEGER,
        name: DataTypes.STRING,
        section_id: DataTypes.INTEGER
    }, {});
    corridor.associate = function (models) {
        corridor.hasMany(models.inventory, {through: 'corridor_id', as: 'corridor'});
        corridor.hasMany(models.rack, {through: 'corridor_id', as: 'corridor'});
        corridor.belongsTo(models.section, {through: 'section_id', as: 'section'});
    };
    return corridor;
};
