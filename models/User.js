// 'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        account_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    User.associate = function (models) {
        User.belongsTo(models.Departement, {
            as: 'departement',
            foreignKey: 'idDepartement'
        });
    };
    return User;
};


// const models = require('../models/Users')


// controllers
// function getAllUsers(req, res, next) {
//     return models.User
//         .findAll({
//             paranoid: false
//         })
//         .then(users => res.status(200).json({
//             status: 'okkk',
//             users
//         }))
//         .catch(err => console.log(err));
// }
// module.exports = {
//     getAllUsers,
// }