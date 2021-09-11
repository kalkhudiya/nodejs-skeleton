'use strict';
module.exports = (sequelize, DataTypes) => {
  const clients = sequelize.define('clients', {
    name: DataTypes.STRING
  }, {});
  clients.associate = function(models) {
    // associations can be defined here
  };
  return clients;
};