'use strict';
module.exports = (sequelize, DataTypes) => {
    const product_category = sequelize.define('product_category', {
        product_category_id: DataTypes.INTEGER,
        name: DataTypes.STRING
    }, {});
    product_category.associate = function (models) {
        product_category.belongsToMany(models.product_subcategory, {through: 'product_category_id', as: 'product_category'});
    };
    return product_category;
};