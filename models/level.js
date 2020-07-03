'use strict';
module.exports = (sequelize, DataTypes) => {
  const level = sequelize.define('level', {
    level_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    rack_id: DataTypes.INTEGER
  }, {});
  level.associate = function(models) {
    //level.belongsToMany(models.inventory, {through: 'level_id', as: 'level'});
    level.belongsToMany(models.position, {through: 'level_id', as: 'level'});
  };
  return level;
};