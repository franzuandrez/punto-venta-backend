'use strict';
module.exports = (sequelize, DataTypes) => {
    const section = sequelize.define('section', {
        section_id: DataTypes.INTEGER,
        name: DataTypes.STRING,
        warehouse_id: DataTypes.INTEGER
    }, {});
    section.associate = function (models) {
        section.hasMany(models.inventory, {through: 'section_id', as: 'section'});
        section.hasMany(models.corridor, {through: 'section_id', as: 'section'});
    };
    return section;
};