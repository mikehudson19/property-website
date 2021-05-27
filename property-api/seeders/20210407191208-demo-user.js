'use strict';
// import { Op } from 'sequelize';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     return queryInterface.bulkInsert('Users', [{
      firstName: 'Gimli',
      lastName: 'The Dwarf',
      email: 'gimli@live.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'Legolas',
      lastName: 'of the Woodland Realm',
      email: 'leggo@live.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users',
    {[Sequelize.Op.or]: [{firstName: 'Gimli'}, {firstName: 'Legolas'}]}
    );
  }
};
