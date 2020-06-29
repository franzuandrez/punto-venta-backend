'use strict';
module.exports = (sequelize, DataTypes) => {
    const product = sequelize.define('product', {
        product_id: DataTypes.INTEGER,
        name: DataTypes.STRING,
        color: DataTypes.STRING,
        safety_stock_level: DataTypes.STRING,
        size: DataTypes.STRING,
        weigth: DataTypes.STRING,
        product_subcategory_id: DataTypes.INTEGER,
        instructions: DataTypes.STRING
    }, {});
    product.associate = function (models) {
        product.hasMany(models.inventory, {through: 'product_id', as: 'product'});
        product.hasMany(models.product_photo, {through: 'product_id', as: 'product'});
        product.hasMany(models.product_review, {through: 'product_id', as: 'product'});
        product.hasMany(models.shopping_cart_item, {through: 'product_id', as: 'product'});
        product.hasMany(models.product_cost_history, {through: 'product_id', as: 'product'});
        product.hasMany(models.product_list_price_history, {through: 'product_id', as: 'product'});
        product.hasMany(models.product_vendor, {through: 'product_id', as: 'product'});
    };
    return product;
};