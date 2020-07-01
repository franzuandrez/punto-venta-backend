'use strict';
module.exports = (sequelize, DataTypes) => {
    const customer = sequelize.define('customer', {
        business_entity_id: DataTypes.INTEGER,
        territory_id: DataTypes.INTEGER,
        number_account: DataTypes.STRING
    }, {});
    customer.associate = function (models) {
        customer.belongsTo(models.business_entity, {through: 'business_entity_id', as: 'business_entity'})
    };
    return customer;
};
