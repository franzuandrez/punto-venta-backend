'use strict';
module.exports = (sequelize, DataTypes) => {
    const person = sequelize.define('person', {
        person_id: DataTypes.INTEGER,
        businesss_entity_id: DataTypes.INTEGER,
        person_type: DataTypes.STRING,
        title: DataTypes.STRING,
        first_name: DataTypes.STRING,
        middle_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        suffix: DataTypes.STRING
    }, {});
    person.associate = function (models) {
        // associations can be defined here
    };
    return person;
};