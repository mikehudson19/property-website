'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Adverts', [
      {
        title: '1 Bedroom flat for sale',
        province: 'Gauteng',
        city: 'Johannesburg',
        price: 640000,
        details: '90s cornhole affogato ea, enim portland sunt cloud bread shabby chic waistcoat green juice velit. Ramps messenger bag squid, succulents gastropub cillum hot chicken meggings exercitation ut. Brunch leggings tousled, venmo minim normcore hexagon neutra pug pop-up. Typewriter viral echo park flannel VHS fingerstache flexitarian banjo tote bag.',
        status: 'Live',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Adverts');
  }
};
