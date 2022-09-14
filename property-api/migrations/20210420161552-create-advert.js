'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Adverts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      province: {
        type: Sequelize.STRING,
        allowNull: false
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      details: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM('Live', 'Hidden', 'Deactivated'),
        allowNull: false
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      bedrooms: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      bathrooms: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      carports: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      size: {
        type: Sequelize.INTEGER,
        allowNull: false
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
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Adverts');
  }
};
