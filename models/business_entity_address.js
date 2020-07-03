'use strict';
module.exports = (sequelize, DataTypes) => {
    const business_entity_address = sequelize.define('business_entity_address', {
        business_address_id: DataTypes.INTEGER,
        business_entity_id: DataTypes.INTEGER,
        address_id: DataTypes.INTEGER,
        address_type_id: DataTypes.INTEGER
    }, {});
    business_entity_address.associate = function (models) {
        /*business_entity_address.belongsTo(models.address_type,
            {through: 'address_type_id', as: 'business_entity_address'})*/
    };
    return business_entity_address;
};
