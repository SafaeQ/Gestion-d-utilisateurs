const Sequelize = require('sequelize');
const db = require('../db')
module.exports = db.define('User', {
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
}).associate = function (models) {
    User.belongsTo(models.Departement, {
        as: 'departement',
        foreignKey: 'idDepartement'
    });
};
return User;