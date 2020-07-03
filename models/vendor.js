'use strict';
module.exports = (sequelize, DataTypes) => {
    const vendor = sequelize.define('vendor', {
        business_entity_id: DataTypes.INTEGER,
        account_number: DataTypes.STRING,
        name: DataTypes.STRING,
        credit_rating: DataTypes.INTEGER,
        preferred_vendor_status: DataTypes.INTEGER,
        active_flag: DataTypes.INTEGER,
        url_web: DataTypes.STRING
    }, {});
    vendor.associate = function (models) {
        vendor.belongsTo(models.business_entity,
            {through: 'business_entity_id', as: 'business_entity'});
        vendor.belongsToMany(models.product_vendor,
            {through: 'vendor_id', as: 'vendor'});
    };
    return vendor;
};
