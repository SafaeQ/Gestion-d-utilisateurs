'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:*/
    await queryInterface.createTable('users', {
      id_user: {
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
      id_ped: {
        type: Sequelize.INTEGER,
        forgingKey: true
      },
      createAt: Sequelize.DATE,
      updateAt: Sequelize.DATE
    });

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:*/
    await queryInterface.dropTable('users');

  }
};