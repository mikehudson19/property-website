'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('AdvertGalleries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      advertId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        // references: {
        //   model: 'Adverts',
        //   key: 'id'
        // }
      },
      headlineImage: {
        allowNull: false,
        type: Sequelize.STRING
      },
      imageOne: {
        allowNull: false,
        type: Sequelize.STRING
      },
      imageTwo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      imageThree: {
        allowNull: false,
        type: Sequelize.STRING
      },
      imageFour: {
        allowNull: false,
        type: Sequelize.STRING
      },
      imageFive: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('AdvertGalleries');
  }
};
