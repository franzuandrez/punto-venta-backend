'use strict';
module.exports = (sequelize, DataTypes) => {
    const business_entity = sequelize.define('business_entity', {
        business_entity_id: DataTypes.INTEGER
    }, {});
    business_entity.associate = function (models) {
        business_entity.hasOne(models.person, {through: 'person_id', as: 'person'});
        business_entity.belongsToMany(models.business_entity_address, {
            through: 'business_entity_id',
            as: 'business_entity_address'
        });
    };
    return business_entity;
};