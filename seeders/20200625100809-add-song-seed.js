'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Songs', [{
      Title: 'asdasd',
      Artist: 'asd',
      Genre: 'punk',
      comment: 'ya begitu',
      createdAt: new Date(),
      updatedAt: new Date()

    }])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
