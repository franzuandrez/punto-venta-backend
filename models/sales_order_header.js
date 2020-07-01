'use strict';
module.exports = (sequelize, DataTypes) => {
    const sales_order_header = sequelize.define('sales_order_header', {
        order_date: DataTypes.DATE,
        status: DataTypes.STRING,
        online_order_flag: DataTypes.STRING,
        sales_order_number: DataTypes.STRING,
        customer_id: DataTypes.INTEGER,
        sales_person_id: DataTypes.INTEGER,
        bill_to_address_id: DataTypes.INTEGER,
        ship_to_address_id: DataTypes.INTEGER,
        ship_mehtod: DataTypes.INTEGER,
        payment_type: DataTypes.STRING,
        subtotal: DataTypes.DECIMAL,
        tax_ammount: DataTypes.DECIMAL,
        freigth: DataTypes.DECIMAL,
        total_due: DataTypes.DECIMAL,
        comments: DataTypes.STRING
    }, {});
    sales_order_header.associate = function (models) {
        sales_order_header.hasMany(models.sales_order_header_sales_reason, {
            through: 'sales_order_id',
            as: 'sales_order_header'
        });
        sales_order_header.hasMany(models.sales_order_detail, {
            through: 'sales_order_header_id',
            as: 'sales_order_header'
        });
    };
    return sales_order_header;
};
