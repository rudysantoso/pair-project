'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize
  class Song extends Model {}
  Song.init({
    Title: DataTypes.STRING,
    Artist: DataTypes.STRING,
    Genre: DataTypes.STRING,
  }, {
    sequelize
  });
  Song.associate = function(models) {
    // associations can be defined here
  };
  return Song;
};