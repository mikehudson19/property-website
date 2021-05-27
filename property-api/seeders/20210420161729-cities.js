'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Cities', [{
      name: 'Johannesburg',
      province: 'Gauteng'
    }, {
      name: 'Pretoria',
      province: 'Gauteng'
    }, {
      name: 'Sandton',
      province: 'Gauteng'
    }, {
      name: 'Woodstock',
      province: 'Western Cape'
    }, { 
      name: 'Belville',
      province: 'Western Cape'
    }, {
      name: 'Kalk Bay',
      province: 'Western Cape'
    }])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cities');
  }
};
