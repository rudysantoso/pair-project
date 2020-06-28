'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize
  class Comment extends Model {}
  Comment.init({
    song_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    Content: DataTypes.STRING
  },{
    sequelize, modelName: 'Comment'
  });
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.Song)
    Comment.belongsTo(models.User)
  };
  return Comment;
};