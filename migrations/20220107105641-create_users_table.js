'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // await queryInterface.addConstaint('users', {
    //   fields: ['id_departement'],
    //   type: 'foreign key',
    //   name: 'users',
    //   references: {
    //     table: 'departement',
    //     fields: 'id'
    //   }
    // })
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },

      account_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      id_departement: {
        type: Sequelize.INTEGER,
        forgingKey: true,
        // references: {
        //   model: 'departements',
        //   key: 'id_departement'
        // },
        onDelete: 'CASCADE',
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');

  }
};