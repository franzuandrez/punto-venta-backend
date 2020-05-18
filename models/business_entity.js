'use strict';
module.exports = (sequelize, DataTypes) => {
    const business_entity = sequelize.define('business_entity', {
        business_entity_id: DataTypes.INTEGER
    }, {});
    business_entity.associate = function (models) {
        // associations can be defined here
        business_entity.hasOne(models.person, {through: 'business_entity_id', as: 'person'})
    };
    return business_entity;
};